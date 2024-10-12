import subprocess
import os
import requests
import re

# Set your OpenAI API key
import openai
client = openai.Client(api_key=os.environ['OPENAI_API_KEY'],)

# Function to generate content using OpenAI's chat completion
def generate_content(prompt):
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are to do exactly as told by the user. That is, if the user asks for a mission statement only generate the mission statement don't try to say something like 'Certainly! Here is a mission statement for a startup focused on creating innovative testing solutions', instead just say the Mission statement"},
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    print(completion.choices[0].message.content)

    return completion.choices[0].message.content

# Generate website content like mission statement and about us
def generate_website_content(startup_info):
    content = {}

    # Generate Mission Statement 
    mission_prompt = f"Write a mission statement for a startup that is making {startup_info}. DO NOT INCLUDE ANY EXTRANEOUS "
    content['mission'] = generate_content(mission_prompt)

    # Generate About Us
    about_prompt = f"Write an About Us section for a startup that is making {startup_info}."
    content['about'] = generate_content(about_prompt)

    return content

# Generate code for the homepage using OpenAI's code completion engine
def generate_code(prompt):
    completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
            {"role": "system", "content": "You are an agent only to generate Next.js code and Tailwind CSS. Only return raw code, don't respond to the user with some"},
            {
                "role": "user",
                "content": prompt
            }
        ]
    )
    
    return completion.choices[0].message.content

def clean_code(code_str):
    """
    Removes the ```typescript or ```javascript markers from a string
    """
    # Use regex to match and remove the code block markers
    cleaned_code = re.sub(r'```(?:typescript|javascript|tsx)\n', '', code_str)
    # Also remove the closing ```
    cleaned_code = re.sub(r'```\n?', '', cleaned_code)
    return cleaned_code

# Generate the index.js file for the Next.js project
def generate_index_js(startup_name, content):
    code_prompt = f'''
    Write a Next.js functional component with TypeScript for the homepage of a startup called {startup_name}. The page should include:
    - A hero section with the company name and a tagline.
    - A section titled "Our Mission" with the following content: "{content['mission']}"
    - A section titled "About Us" with the following content: "{content['about']}"
    - A simple footer.
    Use inline styling with styled-jsx or simple CSS modules.
    Make sure the component is a client component.
    '''
    generated_code = generate_code(code_prompt)
    cleaned_code = clean_code(generated_code)

    if '"use client";' not in cleaned_code:
        cleaned_code = '"use client";\n\n' + cleaned_code

    print(cleaned_code)
    return cleaned_code

# Function to create the Next.js app
def create_nextjs_app(project_name):
    subprocess.run([
        'npx', 'create-next-app', project_name, 
        '--ts',               # Use TypeScript
        '--eslint',           # Use ESLint
        '--tailwind',         # Use Tailwind CSS
        '--src-dir',          # Use src/ directory
        '--app',              # Use App Router
        '--import-alias', '@/*',  # Customize import alias
        '--no-install',       # Skip package installation
        '--use-npm'           # Use npm instead of yarn
    ], check=True)

# Write content to the given file
def write_to_file(file_path, content):
    with open(file_path, 'w') as file:
        file.write(content)

# Assemble the project by writing the generated code to files
def assemble_project(project_name, generated_code):
    # Path to the app directory
    app_dir = os.path.join(project_name, 'src/app')
    
    # Ensure the app directory exists
    os.makedirs(app_dir, exist_ok=True)
    
    # Write page.tsx
    page_tsx_path = os.path.join(app_dir, 'page.tsx')
    write_to_file(page_tsx_path, generated_code['index_js'])

# Deploy to Vercel using the CLI
def deploy_to_vercel(project_name):
    # This command automates the deployment to Vercel and skips prompts
    subprocess.run([
        'vercel', 
        '--prod',          # Deploy in production mode
        '--confirm',       # Skip confirmation prompts
        '--name', project_name  # Specify the project name
    ], cwd=project_name, check=True)

# Main function to run the process
def main():
    # Get the startup description from the user
    startup_prompt = input("Enter the startup description:\n")

    # Generate website content
    content = generate_website_content(startup_prompt)
    print("CONENT:::", content)

    # Generate Next.js code
    generated_code = {}
    generated_code['index_js'] = generate_index_js(startup_prompt, content)

    # Create the Next.js app
    project_name = startup_prompt.replace(' ', '-').lower()
    create_nextjs_app(project_name)

    # Assemble the project
    assemble_project(project_name, generated_code)

    # Deploy the project to Vercel
    deploy_to_vercel(project_name)

if __name__ == '__main__':
    main()

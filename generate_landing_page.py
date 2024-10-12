import subprocess
import os
import requests
import re
import openai

client = openai.Client(api_key=os.environ['OPENAI_API_KEY'],)

# Generic function to generate text
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

def generate_website_content(startup_info, cofounder_name):
    content = {}

    # Generate Mission Statement
    mission_prompt = f"Write a mission statement for a startup that is making {startup_info}."
    content['mission'] = generate_content(mission_prompt)

    # Generate About Us with co-founder name
    about_prompt = f"Write an About Us section for a startup called DormConnect. The co-founder is {cofounder_name}."
    content['about'] = generate_content(about_prompt)

    return content

# Generic function to generate next.js code 
def generate_code(prompt):
    completion = client.chat.completions.create(
    model="gpt-4o",
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
def generate_index_js(startup_name, content, cofounder_name, cover_image_url, cofounder_image_url):
    code_prompt = f'''
    Write a Next.js functional component with Tailwind for the homepage of a startup called {startup_name}. The page should include:
    - A hero section with the company name, a tagline, and a cover image: "{cover_image_url}"
    - A section titled "Our Mission" with the following content: "{content['mission']}"
    - A section titled "About Us" with the following content: "{content['about']}"
    - An image of the co-founder {cofounder_name} with the image URL: "{cofounder_image_url}"
    - A simple footer.
    Make sure the component is a client component.
    '''
    generated_code = generate_code(code_prompt)
    cleaned_code = clean_code(generated_code)

    if '"use client";' not in cleaned_code:
        cleaned_code = '"use client";\n\n' + cleaned_code

    return cleaned_code

# Generate CSS for the page
def generate_css():
    css_content = '''
    .container {
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    .hero {
      background-color: #f4f4f8;
      padding: 60px 20px;
      text-align: center;
    }

    .companyName {
      font-size: 3rem;
      color: #333;
      margin-bottom: 10px;
    }

    .tagline {
      font-size: 1.5rem;
      color: #555;
    }

    .mission, .about {
      margin: 40px 0;
    }

    .mission h2, .about h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 10px;
    }

    .footer {
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      text-align: center;
    }

    .footer p {
      margin: 0;
      font-size: 0.9rem;
    }
    '''
    return css_content

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

#Generate image with DallE
def generate_image(prompt):
    response = client.images.generate(
        model="dall-e-3",
        prompt="a white siamese cat",
        size="1024x1024",
        quality="standard",
        n=1,
    )

    image_url = response.data[0].url
    return image_url


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
def assemble_project(project_name, generated_code, generated_css):
    # Path to the app directory
    app_dir = os.path.join(project_name, 'src/app')
    styles_dir = os.path.join(project_name, 'src/styles')
    
    # Ensure the directories exist
    os.makedirs(app_dir, exist_ok=True)
    os.makedirs(styles_dir, exist_ok=True)
    
    # Write page.tsx
    page_tsx_path = os.path.join(app_dir, 'page.tsx')
    write_to_file(page_tsx_path, generated_code)

    # Write CSS
    css_path = os.path.join(styles_dir, 'Home.module.css')
    write_to_file(css_path, generated_css)

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
def main(startup_prompt, cofounder_name):
    try: 
        # Generate website content
        content = generate_website_content(startup_prompt, cofounder_name)

        # Generate images using DALL-E
        cover_image_prompt = f"A modern and minimalistic hero image for {startup_prompt}."
        cofounder_image_prompt = f"Professional portrait of {cofounder_name} as a startup co-founder."
        
        cover_image_url = generate_image(cover_image_prompt)
        cofounder_image_url = generate_image(cofounder_image_prompt)

        # Generate Next.js code
        generated_code = generate_index_js(startup_prompt, content, cofounder_name, cover_image_url, cofounder_image_url)

        # Generate CSS
        generated_css = generate_css()

        # Create the Next.js app
        project_name = startup_prompt.replace(' ', '-').lower()
        create_nextjs_app(project_name)

        # Assemble the project
        assemble_project(project_name, generated_code, generated_css)

        # Deploy the project to Vercel
        deploy_to_vercel(project_name)

    except Exception as e:
        print(f"An error occurred in the deployment process: {e}")

# Example usage
main("Airbnb for dorms", "John Doe")

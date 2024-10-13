import os
import json
from openai import OpenAI
from pydantic import BaseModel
from mail import send_email
import csv
import unicodedata
import re
from generate_landing_page import main

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Set up OpenAI API key

def create_openai_chat(prompt):
    try:
        response = client.chat.completions.create(model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ])
        return response.choices[0].message.content
    except Exception as e:
        return f"An error occurred: {str(e)}"

class BrainstormIdeasResponse(BaseModel):
    ideas: list[str]

def brainstorm_ideas(prompt, num_ideas=5):
    try:
        response = client.beta.chat.completions.parse(model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant to generate good ideas for a business, given a short prompt about the space. Ideas should be niche and specific, while still having a large market. Ideas should be timely, focusing on the rise of AI or other trends."},
            {"role": "user", "content": "Prompt: Create a business in the pet space.\nCount: 5"},
            {"role": "assistant", "content": "1. Pet Insurance Comparison Website\n2. Custom Pet Portrait Artist\n3. Interactive Pet Toy Maker\n4. Organic Pet Food Delivery Service\n5. Pet Training App"},
            {"role": "user", "content": "Prompt: " + prompt + "\nCount: " + str(num_ideas)}
        ],
        response_format=BrainstormIdeasResponse)
        return response.choices[0].message.parsed
    except Exception as e:
        return f"An error occurred: {str(e)}"

class ChosenIdea(BaseModel):
    title: str
    description: str

class ChosenIdeasResponse(BaseModel):
    ideas: list[ChosenIdea]

def pick_ideas(ideas, num_ideas=3):
    try:
        response = client.beta.chat.completions.parse(model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant to pick the best ideas from a list of business ideas. Pick ideas that have an easily executable MVP with a frontend website, with no database or authentication required. The best ideas should have a very clear and niche initial market. Return the entire objects for the chosen ideas."},
            {"role": "user", "content": "Ideas: 1. Pet Insurance Comparison Website\n2. Custom Pet Portrait Artist\n3. Interactive Pet Toy Maker\n4. Organic Pet Food Delivery Service\n5. Pet Training App. \nPick: 2"},
            {"role": "assistant", "content": "1. Pet Insurance Comparison Website\n2. Pet Training App"},
            {"role": "user", "content": "Ideas: " + json.dumps(ideas) + "\nCount: " + str(num_ideas)}
        ],
        response_format=ChosenIdeasResponse)
        return response.choices[0].message.parsed
    except Exception as e:
        return f"An error occurred: {str(e)}"

def elaborate_idea(idea):
    try:
        response = client.chat.completions.create(model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant to elaborate on a business idea. Write a 1 paragraph description of the idea, including how it works, who it is for, and how it makes money. Also, describe the initial, niche market this would initially target, with a clear ICP. Write one sentence about what the landing page should look like. Make sure to specifically target the ICP in the description - if your app is an app for teachers starting out with STEM teachers, make sure to cater the entire app to STEM teachers. Finally, come up with a name for the business."},
            {"role": "user", "content": "Idea:" + "Language Learning with AI-Powered Conversation Partner: An app offering users the chance to practice languages with an AI that adapts to their level and helps correct their pronunciation and grammar."},
            {"role": "assistant", "content": "The AI-Powered Conversation Partner app is set to revolutionize language learning for busy professionals seeking to enhance their conversational fluency. This app, leveraging advanced AI technology, provides a personalized and immersive language learning experience through simulated real-life conversations. It adapts dynamically to the user's proficiency level, offering real-time feedback on pronunciation and grammar, and focusing on improving verbal communication skills.  The app is particularly beneficial for 30-45-year-old professionals in international business and relations who need to navigate multilingual environments where languages like English, Mandarin, Spanish, and French are common. These busy professionals often lack the time for traditional language classes, making this app an ideal solution for improving their language skills and advancing their career opportunities. The app operates on a subscription-based model, with tiered pricing based on interaction volume and access to additional features like specialized vocabulary packs or industry-focused dialogues. The business is called 'UpSkill'."},
            {"role": "user", "content": "Idea: " + idea},
        ])
        return response.choices[0].message.content
    except Exception as e:
        return f"An error occurred: {str(e)}"

class EmailResponse(BaseModel):
    subject: str
    content: str

def write_email(idea):
    response = client.beta.chat.completions.parse(model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant to write an email to an acquitance, asking for honest feedback about a new business idea. Ask in a way that would encourage honest feedback, whether it's positive or negative, and specific suggestions. Include a link to the landing page at the end of the email by writing [LINK_HERE], do not try to give the link a title. If you write [FIRST_NAME], it will be replaced with the recipient's first name. Include no other placeholders. Make sure there are no asteriks for any reason, such as trying to bold some text. End the email with 'Thanks for your help!'. Do not include placeholders like 'Thanks, [Your Name]'."},
            {"role": "user", "content": "Idea: title='AI-Based Language Learning Partner: Create an AI-driven language learning app that acts as a conversational partner, providing real-time corrections, suggestions, and practice scenarios for language learners to improve practical communication skills.', description='The AI-Based Language Learning Partner is a cutting-edge app designed for STEM teachers aiming to master a second language for communication with students from diverse linguistic backgrounds. By serving as an intelligent conversational partner, the app offers real-time corrections and constructive suggestions, enabling teachers to practice practical communication skills through various realistic scenarios like parent-teacher meetings and scientific discussions. This app stands out by customizing its interaction to the specific jargon and complexities of STEM subjects, thus making it an invaluable tool for teachers committed to improving their multilingual communication capabilities. It employs a subscription model tailored to educational institutions, providing bulk access at discounted rates, or individual subscriptions for personal professional development. Initially targeting the rapidly expanding community of bilingual STEM educational environments in urban areas, this app meets the needs of innovative teachers striving to engage with their diverse student population effectively. The landing page should feature testimonials from STEM teachers, a sneak peek into its AI-driven interactions, and a simple call-to-action for a free trial focused on STEM educational improvements.'"},
            {"role": "assistant", "content": """Subject: Quick feedback on business idea - AI Language Learning for STEM Teachers

Hey [Friend's Name],

I've got a new business idea and would love your honest feedback:

**AI-Based Language Learning Partner for STEM Teachers**

Key points:
- AI app for STEM teachers learning a second language
- Provides real-time corrections and practice scenarios
- Focuses on STEM-specific jargon and educational contexts
- Subscription model (individual and institutional)
- Targets growing bilingual STEM education market

I'd appreciate your thoughts on:
1. Potential challenges
2. How it compares to existing apps
3. Ideas to make it more appealing for STEM teachers
4. Viability of the subscription model

Don't hold back – I'm after constructive criticism to refine the idea.

Thanks in advance!"""},
            {"role": "user", "content": "\nIdea: " + idea},
        ],
        response_format=EmailResponse)
    email = response.choices[0].message.parsed
    email.content = email.content.replace('*', '', -1)
    
    # Replace all non-ASCII characters
    email.content = unicodedata.normalize('NFKD', email.content).encode('ASCII', 'ignore').decode('ASCII')
    email.subject = unicodedata.normalize('NFKD', email.subject).encode('ASCII', 'ignore').decode('ASCII')
    
    return email

def split_emails(emails, num_splits):
    return [emails[i::num_splits] for i in range(num_splits)]

# Example usage
if __name__ == "__main__":

    prompt = "Create a business in the AI-powered education space."
    ideas = brainstorm_ideas(prompt)

    elaborated_ideas = []
    for i, idea in enumerate(ideas.ideas, 1):
        print(f"{i}. {idea}")
        elaborated_idea = elaborate_idea(idea)
        elaborated_ideas.append({
            "title": idea,
            "description": elaborated_idea
        })
        
    best_ideas = pick_ideas(elaborated_ideas)

    all_emails = list(csv.reader(open('emails.csv')))
    split_emails = split_emails(all_emails, len(best_ideas.ideas))

    for i, idea in enumerate(best_ideas.ideas):
        print(idea.title)
        print(idea.description)
        email = write_email("Title: " + idea.title + "\nDescription: " + idea.description)
        print(email)
        print("\n\n")
        main(idea.title + '\n' + idea.description, 'Luke Bousfield')
        #for [name, send_address] in split_emails[i]:
        #    email.content = email.content.replace('[FIRST_NAME]', name).replace('\u2019', "'")
        #    send_email(email.subject, email.content, send_address)

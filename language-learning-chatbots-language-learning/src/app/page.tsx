"use client";

jsx
'use client';

import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full bg-blue-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">LinguaBot</h1>
          <p className="mt-2 text-xl">Empower your teaching with AI-driven language tutors.</p>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
            <Image 
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-5QkgthXLzad3QutZ02ZRkADk.png?st=2024-10-12T23%3A02%3A41Z&se=2024-10-13T01%3A02%3A41Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A13%3A33Z&ske=2024-10-13T23%3A13%3A33Z&sks=b&skv=2024-08-04&sig=QYaEKwB6ZiqhIhqMSqfq6v1bkNuMHab7nZNMRL4OMvw%3D" 
              alt="Cover Image" 
              width={800} 
              height={450} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="w-full bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-lg">
              Empowering STEM educators through immersive language learning experiences, LinguaBot harnesses AI-driven conversational technology to transform teaching methodologies and foster multicultural connections in the classroom.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold">About Us</h2>
              <p className="mt-4 text-lg">
                DormConnect is dedicated to enhancing the college experience by providing seamless connection and community services for students living in dormitories. Founded by Luke Bousfield, our startup aims to revolutionize student living by simplifying roommate coordination, event planning, and social networking within college campuses.
                <br/><br/>
                At DormConnect, we understand the unique challenges of dormitory living and are passionate about creating a space where students can thrive, form meaningful connections, and make the most of their time in college. Our innovative platform offers a range of tools designed to streamline communications, organize shared resources, and foster a sense of belonging and collaboration among dorm residents.
                <br/><br/>
                Driven by a commitment to student satisfaction and a keen understanding of campus life, DormConnect is shaping the future of student interaction, bringing convenience and community to dorms nationwide.
              </p>
            </div>
            <div className="text-center">
              <Image 
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-sZndBcqpwDwJNN2V1IVyLdkA.png?st=2024-10-12T23%3A02%3A52Z&se=2024-10-13T01%3A02%3A52Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A41%3A17Z&ske=2024-10-13T23%3A41%3A17Z&sks=b&skv=2024-08-04&sig=7xQHy3z2VUCT9JlekMH8wRFw483TIjtHRnIMG%2BTr57c%3D" 
                alt="Luke Bousfield" 
                width={300} 
                height={300} 
                className="rounded-full mx-auto"
              />
              <p className="mt-4 text-lg font-medium">Luke Bousfield, Co-Founder</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2023 LinguaBot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

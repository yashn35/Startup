"use client";

'use client';

import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 py-12 text-center text-white">
        <h1 className="text-4xl font-bold">NeuroNurture</h1>
        <p className="mt-2 text-xl">Pioneering AI-Assisted Special Education Tools</p>
        <div className="mt-8">
          <Image
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-mJXWGO3uT45VyEJXZPpbTbry.png?st=2024-10-12T23%3A03%3A50Z&se=2024-10-13T01%3A03%3A50Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A23%3A29Z&ske=2024-10-13T23%3A23%3A29Z&sks=b&skv=2024-08-04&sig=C2sZnrvX1TTJwOAbIVjC1n5DDJw3mRjuLNxzzYpW6yk%3D"
            alt="Hero"
            width={800}
            height={400}
            className="mx-auto rounded-md shadow-lg"
          />
        </div>
      </header>

      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          To empower special education through innovative, AI-driven solutions that tailor learning experiences and promote success for students with diverse needs, while supporting educators and parents with dynamic tools and insights to nurture every child's potential.
        </p>
      </section>

      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Welcome to DormConnect, where we bridge the gap between convenience and student living. Founded by Luke Bousfield, DormConnect is dedicated to creating a seamless and efficient communication platform for college dorm residents. Our mission is to enhance the on-campus living experience by providing innovative solutions that connect students, streamline information sharing, and foster a vibrant community atmosphere. At DormConnect, we believe that a well-connected dorm is key to a successful and enjoyable college life. Join us in revolutionizing the way students interact and engage with their campus community.
        </p>
        <div className="mt-6">
          <Image
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-t9EgqlgS3syzMhkldn27Mn6J.png?st=2024-10-12T23%3A03%3A59Z&se=2024-10-13T01%3A03%3A59Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A22%3A43Z&ske=2024-10-13T23%3A22%3A43Z&sks=b&skv=2024-08-04&sig=qMhVhPc4Q4TlulrTQlGWdzs1kSddvwLoqnyjcELujRs%3D"
            alt="Co-founder Luke Bousfield"
            width={200}
            height={200}
            className="mx-auto rounded-full shadow-lg"
          />
        </div>
      </section>

      <footer className="bg-gray-800 py-6 text-center text-white">
        <p>&copy; 2023 NeuroNurture. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

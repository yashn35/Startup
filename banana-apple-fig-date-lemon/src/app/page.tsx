'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-CQdShNM0R9U2hVXlduzVUTYn.png?st=2024-10-12T23%3A52%3A20Z&se=2024-10-13T01%3A52%3A20Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-13T00%3A30%3A57Z&ske=2024-10-14T00%3A30%3A57Z&sks=b&skv=2024-08-04&sig=lQtRd1xKkJ2FT3K4JV%2BxKpWqOcCmikKnTDaZY2Yt9W0%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">CareerAscend</h1>
          <p className="text-xl">AI-Augmented Career Skills Development Platform</p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            Empowering mid-career professionals to navigate transitions and enhance their skills through personalized, AI-driven courses and assessments, ensuring they stay competitive and thrive in the evolving job market.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg mb-6">
            <strong>About Us</strong>
            <br />
            <br />
            At DormConnect, we're revolutionizing the way students experience campus life. Founded by Luke Bousfield, our mission is to create a seamless and vibrant community for students living in dormitories. We understand that college is more than just classes—it's about building connections, fostering friendships, and creating lasting memories.
            <br />
            <br />
            DormConnect offers an innovative platform that connects students with their peers, resources, and campus events. Whether you're looking to find a study group, discover local activities, or simply connect with fellow residents, our user-friendly app makes it easy to stay engaged and informed.
            <br />
            <br />
            Led by Luke's passion for enhancing student life and leveraging technology to solve real-world challenges, DormConnect is committed to providing solutions that make dorm living enjoyable and stress-free. We believe in the power of community and strive to support every student's journey through their academic and personal growth.
            <br />
            <br />
            Join us in transforming the dorm experience—where connections thrive and every student feels at home.
          </p>
          <div className="flex justify-center">
            <Image
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-WPDJzOUjQIpiwz62wSXqX46i.png?st=2024-10-12T23%3A52%3A29Z&se=2024-10-13T01%3A52%3A29Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-13T00%3A37%3A49Z&ske=2024-10-14T00%3A37%3A49Z&sks=b&skv=2024-08-04&sig=BPkpWOH7cAvmc8c7Wzkj2fdEx3MkJyPW5SeBtZ2Ss2w%3D"
              alt="Co-founder Luke Bousfield"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} CareerAscend. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

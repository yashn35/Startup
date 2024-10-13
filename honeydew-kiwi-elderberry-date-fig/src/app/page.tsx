"use client";

import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="w-full bg-gray-100">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              LinguaAdapt
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Personalized AI-Based Language Learning for STEM Professionals
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Start Free Trial
            </button>
          </div>
          <div className="flex-1">
            <Image
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-AtvmgPfuVjg3isoraforRBg4.png?st=2024-10-12T23%3A50%3A35Z&se=2024-10-13T01%3A50%3A35Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A17%3A30Z&ske=2024-10-13T23%3A17%3A30Z&sks=b&skv=2024-08-04&sig=6TnzLVQt/15XeTWs5q7ISMRn4LfyGpm%2BXkUtHteHEAg%3D"
              alt="LinguaAdapt Cover"
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>
      </header>

      {/* Our Mission */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          At LinguaAdapt, our mission is to leverage cutting-edge artificial intelligence to deliver personalized language learning experiences for expatriate STEM professionals, continuously adapting to their progress and specific industry language needs to enhance both personal satisfaction and professional productivity.
        </p>
      </section>

      {/* About Us */}
      <section className="bg-gray-50 container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
        <p className="mt-4 text-gray-600 whitespace-pre-line">
          **About Us**

          At DormConnect, we revolutionize the college living experience by fostering vibrant, connected communities within dormitories. Founded by Luke Bousfield, our mission is to bridge the gap between students, enhancing their social interactions and overall campus life through innovative technology and thoughtful solutions.

          Luke Bousfield, a passionate entrepreneur with a background in student affairs and technology, recognized the need for a platform that not only simplifies communication but also enriches the dormitory environment. Under his leadership, DormConnect has developed a suite of tools designed to facilitate meaningful connections, streamline event planning, and promote a sense of belonging among residents.

          Our platform offers features such as personalized roommate matching, community forums, event calendars, and resource sharing, all tailored to meet the unique needs of dorm living. By leveraging data-driven insights and user-friendly interfaces, DormConnect ensures that every student can effortlessly engage with their peers and maximize their college experience.

          Committed to fostering inclusive and supportive communities, DormConnect collaborates with universities and student organizations to create environments where every resident feels valued and connected. Join us in transforming dorm life into a thriving, interactive, and memorable journey.
        </p>
        <div className="mt-6 flex justify-center">
          <Image
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-fUiv4aoZi3cftMKJbiK6Qw3V.png?st=2024-10-12T23%3A50%3A46Z&se=2024-10-13T01%3A50%3A46Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A15%3A23Z&ske=2024-10-13T23%3A15%3A23Z&sks=b&skv=2024-08-04&sig=bIVLdI74bbTEyYlDafZbp9ipyyYmMuJVQeP153qUYZA%3D"
            alt="Co-founder Luke Bousfield"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 LinguaAdapt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

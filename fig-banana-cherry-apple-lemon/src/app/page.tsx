"use client";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">StudySync</h1>
            <p className="text-xl text-gray-700">
              Empowering STEM students through intelligent study group facilitation.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-tx9FPSV4293VBpLkniIj3t5X.png?st=2024-10-12T23%3A45%3A34Z&se=2024-10-13T01%3A45%3A34Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A16%3A13Z&ske=2024-10-13T23%3A16%3A13Z&sks=b&skv=2024-08-04&sig=k/ZZxKnMyXyZFvHWFWo7QEUt2vbZ1N4Nu34F/wPYHR4%3D"
              alt="StudySync Cover"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-700">
            <strong>Mission Statement</strong>
            <br />
            <br />
            Our mission at StudySync is to revolutionize the study experience for college STEM
            students by harnessing AI to create optimal, collaborative study groups tailored to
            their academic needs and schedules. We strive to enhance understanding, engagement,
            and academic success through intelligent matchmaking, customized study materials, and
            supportive peer interactions.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">About Us</h2>
            <p className="text-gray-700 mb-4">
              <strong>About Us</strong>
              <br />
              <br />
              Welcome to StudySync, your premier platform for fostering vibrant and connected study
              communities. Founded by Luke Bousfield, StudySync is dedicated to enhancing the learning
              experiences of students by providing innovative solutions that simplify collaboration,
              facilitate resource sharing, and promote a sense of belonging.
              <br />
              <br />
              At StudySync, we understand the unique challenges that come with academic life. Whether
              it's coordinating study groups, organizing virtual study sessions, or managing
              everyday essentials, our mission is to make learning seamless and enjoyable. Our
              user-friendly app bridges the gap between students, ensuring that everyone stays
              informed and engaged.
              <br />
              <br />
              Luke Bousfield, our visionary co-founder, brings a wealth of experience in technology
              and community building. His passion for creating meaningful connections inspired the
              inception of StudySync, driving our commitment to support students in building lasting
              relationships and thriving in their academic journeys.
              <br />
              <br />
              Join us at StudySync and transform your study experience into a dynamic, supportive
              community where every student can connect, collaborate, and excel.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-aCFOCkSVUUqVk0EO616Qorfw/user-E9d62mR2oU5r2FdjWbHBjq7T/img-Ks9ztpWUN5CyItQMSqfVfHng.png?st=2024-10-12T23%3A45%3A48Z&se=2024-10-13T01%3A45%3A48Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-12T23%3A15%3A54Z&ske=2024-10-13T23%3A15%3A54Z&sks=b&skv=2024-08-04&sig=SyLeSI4ICGSU7wPZcYA3Op2NrA7Pqxe9UzYp8IfXANI%3D"
              alt="Founder Luke Bousfield"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-gray-400">test</p>
        </div>
      </footer>
    </div>
  );
}

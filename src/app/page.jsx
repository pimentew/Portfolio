import Navbar from "@/components/Button/Navbar";
import Image from "next/image";
import NewsletterCard from "@/components/NewsLetterCard";
import WorkCard from "@/components/WorkCard";
import SkillsCard from "@/components/SkillsCard";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  // Example article data in English
  const articles = [
    {
      date: "December 25, 2023",
      title: "Embracing Modern Web Technologies",
      description:
        "Discover how modern frameworks and libraries are revolutionizing the way we build applications, enabling faster development and more robust user experiences.",
    },
    {
      date: "December 25, 2023",
      title: "Building Scalable Applications",
      description:
        "Learn about strategies for designing systems that efficiently handle growing user demands and data, ensuring reliability and high performance.",
    },
    {
      date: "December 25, 2023",
      title: "Innovative Problem Solving in Tech",
      description:
        "Explore techniques and methodologies that drive innovative solutions in the fast-paced world of software engineering.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-10">
          {/* Left side */}
          <div className="md:col-span-2">
            <Image
              src="/profile.jpg"
              alt="profile"
              width={128}
              height={128}
              className="rounded-full shadow-lg"
            />
            <h1 className="text-2xl font-bold mt-4">
              Software Engineer, Father, and Believer
            </h1>
            <p className="mt-2 text-gray-600">
              With a passion for creating innovative solutions and a dedication
              to lifelong learning, I specialize in building reliable and
              scalable software. Whether it&#39;s crafting modern web applications
              or tackling complex problems, I strive to deliver high-quality
              results that make a meaningful impact.
            </p>

            {/* Article Section */}
            <div className="w-full md:w-[594px] flex flex-col gap-[40px] pt-8 pb-8">
              {articles.map((article, index) => (
                <div key={index} className="space-y-2">
                  <time className="inline-flex items-center gap-2 font-roboto font-normal text-[14px] leading-6 tracking-[0%] text-[#A1A1AA]">
                    <span className="mr-1 text-[#A1A1AA]">|</span> {article.date}
                  </time>
                  <h2 className="text-xl font-bold">{article.title}</h2>
                  <div className="w-[512px] pt-2">
                    <p className="w-[512px] font-roboto font-normal text-[14px] leading-6 tracking-[0%] text-[#52525B]">
                      {article.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center font-roboto font-medium text-[14px] leading-6 tracking-[0%] text-[#14B8A6]"
                    >
                      Read article &gt;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6 transform scale-90 origin-top-right">
            <NewsletterCard />
            <WorkCard />
            <SkillsCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

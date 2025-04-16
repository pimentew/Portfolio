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
  const articles = [
    {
      title: "Get to Know Me",
      description:
        "Learn about my journey from Brazil to working in tech, my experience in cybersecurity, and what drives me professionally and personally.",
      link: "/portfolio/about",
    },
    {
      title: "Projects I’ve Completed",
      description:
        "A look into real-world infrastructure and cybersecurity projects I’ve worked on — from retail network setups to warehouse wireless deployments.",
      link: "/portfolio/projects",
    },
    {
      title: "Tools I Use in My Workflow",
      description:
        "Explore the tools, platforms, and systems I use every day to protect data, stay productive, and deliver efficient solutions.",
      link: "/portfolio/uses",
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
              src="/portfolio/profilepic.jpg"
              alt="profile"
              width={128}
              height={128}
              className="rounded-full shadow-lg"
            />
            <h1 className="text-2xl font-bold mt-4">
              Cybersecurity Expert, Father, Faithful
            </h1>
            <p className="mt-2 text-gray-600">
              With a strong foundation in cybersecurity and a drive to keep learning, I focus on protecting systems, solving real-world tech issues, and helping people stay secure. From analyzing threats to supporting networks in the field, I aim to bring reliability, efficiency, and peace of mind to every project I work on.
            </p>

            {/* Article Section */}
            <div className="w-full md:w-[594px] flex flex-col gap-[40px] pt-8 pb-8">
              {articles.map((article, index) => (
                <div key={index} className="space-y-2">
                  <time className="inline-flex items-center gap-2 font-roboto font-normal text-[14px] leading-6 tracking-[0%] text-[#A1A1AA]">
                    <span className="mr-1 text-[#A1A1AA]">|</span> December 25, 2023
                  </time>
                  <h2 className="text-xl font-bold">{article.title}</h2>
                  <div className="w-[512px] pt-2">
                    <p className="w-[512px] font-roboto font-normal text-[14px] leading-6 tracking-[0%] text-[#52525B]">
                      {article.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={article.link}
                      className="inline-flex items-center font-roboto font-medium text-[14px] leading-6 tracking-[0%] text-[#14B8A6]"
                    >
                      Learn More &gt;
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

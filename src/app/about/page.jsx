import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 max-w-6xl mx-auto">
      {/* Left: About text */}
      <div className="md:w-2/3 text-black dark:text-white">
        <h1 className="text-4xl font-bold leading-tight mb-6">
          Protecting What Matters in a Digital World
        </h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
        I'm William, a cybersecurity professional originally from Brazil. I moved to the United States in 2014 to pursue my education and build a future rooted in technology and growth. Along the way, I've become a proud father of two amazing girls who inspire me daily to keep pushing forward.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
        I started my journey with a passion for problem-solving and protecting what matters. During an internship, I had the chance to work closely with real-world systems—an experience that taught me the importance of discretion, professionalism, and innovation (and yes, I signed an NDA, so that's all I can say about that!).
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
        Today, I work for Comcast as an IT Field Technician, helping keep networks and technology running smoothly across the field. It’s hands-on, it’s fast-paced, and it keeps me connected to the real-world challenges that tech professionals face every day.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
        I believe that security and usability go hand in hand, and I’m always looking for ways to grow, learn, and build tech that matters. Whether it’s through smarter infrastructure, secure code, or just helping someone get their internet back online, I’m here for it.
        </p>
      </div>

      {/* Right: Image + Links and extra sections */}
      <div className="md:w-1/3 flex flex-col items-center md:items-start text-sm text-gray-600 dark:text-gray-300">
        <Image
          src="/ChickJoe.png"
          alt="Profile"
          width={350}
          height={350}
          className="rounded-lg object-cover mb-6"
        />

        {/* Social Links */}
        <div className="flex flex-col gap-3 w-full items-start">
          <a href="https://x.com" className="flex items-center gap-2 hover:text-teal-500">
            <img src="/twitter.svg" alt="X" className="w-4 h-4" />
            Follow me on X
          </a>
          <a href="https://github.com/pimentew/Portfolio" className="flex items-center gap-2 hover:text-teal-500">
            <img src="/github.svg" alt="GitHub" className="w-4 h-4" />
            Follow me on GitHub
          </a>
          <a href="https://www.linkedin.com/in/williamfpimentel/" className="flex items-center gap-2 hover:text-teal-500">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
            Follow me on LinkedIn
          </a>
          <hr className="border-t border-gray-400 dark:border-white my-3 w-1/2" />
          <a
            href="mailto:jane@email.com"
            className="flex items-center gap-2 hover:text-teal-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-gray-600 dark:text-gray-300"
            >
              <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" />
            </svg>
            william.f.pimentel@gmail.com
          </a>
          
          {/* Personal Quote */}
          <blockquote className="mt-4 italic text-gray-500 dark:text-gray-400 border-l-4 border-teal-600 pl-4">
            "Rooted in Brazil, Growing in Tech"
          </blockquote>
          {/* Career Timeline */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Career Highlights</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>2024: Internship in Cybersecurity</li>
              <li>2025: Graduated with a degree in Cybersecurity</li>
              <li>2025: Landed a Job at Comcast</li>
              <li>2025: Completed my Security+ Certification</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

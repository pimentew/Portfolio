import Image from "next/image";
import Footer from "@/components/Footer";

export default function Projects() {
  const projects = [
    {
      image: "/portfolio/fd.jpg",
      title: "Retail Network Setup",
      description:
        "Configured network infrastructure for a chain of retail stores, including modem, firewall, and switch installation.",
      link: "https://www.familydollar.com/",
    },
    {
      image: "/portfolio/mf.png",
      title: "Warehouse WiFi Deployment",
      description:
        "Deployed secure wireless access points for a warehouse, ensuring full coverage and segmenting employee traffic.",
      link: "https://www.mattressfirm.com/",
    },
    {
      image: "/portfolio/popeyes.png",
      title: "POS Network Optimization",
      description:
        "Optimized point-of-sale connectivity for a restaurant group, reducing latency and eliminating dropped transactions.",
      link: "https://www.popeyes.com/",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Title Section */}
      <div className="mb-12 max-w-[672px] h-[248px] gap-6">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-[48px] tracking-[-0.01em]">
          Projects I have worked so far.
        </h1>
        <p className="text-base leading-7 text-[#A1A1AA] dark:text-gray-300">
          I’ve worked on commercial business projects setting up and securing network infrastructure for small and mid-sized companies. This includes installing routers, switches, and internet connections tailored to each client’s needs, while troubleshooting and optimizing for reliability and performance.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* Image */}
            <div className="mb-2">
              <Image
                src={project.image}
                alt={`${project.title} image`}
                width={42}
                height={42}
                className="rounded-full shadow-md"
              />
            </div>

            {/* Title + Description */}
            <h3 style={{ margin: "0.5rem 0", fontWeight: "bold" }}>{project.title}</h3>
            <p style={{ marginBottom: "1rem" }}>{project.description}</p>

            {/* Link */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "16px", height: "16px" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 0 0-5.656 5.656l1.414 1.414
                    M10.172 13.828a4 4 0 0 0 5.656-5.656l-1.414-1.414
                    M8 12h.01M16 12h.01M12 8v.01M12 16v.01"
                />
              </svg>
              <a href={project.link} style={{ color: "#333", textDecoration: "none" }}>
                {project.link}
              </a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

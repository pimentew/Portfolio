import UsesSection from "@/components/UsesSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  const developmentTools = [
    {
      name: "Wireshark",
      description:
        "One of my go-to tools for analyzing network traffic and investigating security incidents. It helps me inspect packets in real time and troubleshoot network-level issues efficiently.",
    },
    {
      name: "Nmap",
      description:
        "I regularly use Nmap to map out networks, identify open ports, and detect potential vulnerabilities. It’s a reliable tool when assessing the security posture of a client’s infrastructure.",
    },
    {
      name: "Kali Linux",
      description:
        "For penetration testing and training, Kali Linux provides everything I need—from Metasploit to Burp Suite. It's essential for hands-on security tasks.",
    },
  ];

  const designTools = [
    {
      name: "Lucidchart",
      description:
        "I use Lucidchart to diagram network setups, VPN layouts, and troubleshooting flows. It’s perfect for visually explaining tech to clients or internal teams.",
    },
    {
      name: "Draw.io",
      description:
        "Draw.io helps me create quick topology maps and system architecture visuals when outlining infrastructure setups during fieldwork.",
    },
  ];

  const productivityTools = [
    {
      name: "Notion",
      description:
        "Notion helps me keep track of tickets, learning resources, and personal documentation. It keeps all my ideas and notes structured in one place.",
    },
    {
      name: "Google Workspace",
      description:
        "I use Google Docs and Sheets frequently for collaborative project documentation, troubleshooting checklists, and incident reports.",
    },
    {
      name: "Slack",
      description:
        "Slack keeps me connected to coworkers, allowing for fast communication and coordination when on the move or handling multiple job sites.",
    },
    {
      name: "Remote Desktop Tools",
      description:
        "Whether it’s Chrome Remote Desktop or TeamViewer, these tools let me support users and manage endpoints remotely when I’m not physically on-site.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tools I rely on as a cybersecurity professional.
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            From scanning networks and securing endpoints to staying productive on the go,
            these are the tools that help me stay efficient, responsive, and effective in my day-to-day work.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-12">
          <UsesSection title="Security & Development Tools" items={developmentTools} />
          <UsesSection title="Visualization & Design Tools" items={designTools} />
          <UsesSection title="Productivity Tools" items={productivityTools} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

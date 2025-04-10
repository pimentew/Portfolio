import UsesSection from "@/components/UsesSection";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  const developmentTools = [
    {
      name: "Item Name",
      description:
        "Larem iesum doler at amil ooroectetur adpising ein. Ul ee massua mi Aiquem in bendreritumo, Pellettesgue sit amet sapien fringits, mattis liguls consectetut, utrices maure Maecenas Wiss maltis telua. fulam quis impardet augue betl tuulum auesat arate lec, non susc oit manta inarim ou",
    },
    {
      name: "Item Name",
      description:
        "Larem iesum doler at amil ooroectetur adpising ein. Ul ee massua mi Aiquem in bendreritumo, Pellettesgue sit amet sapien fringits, mattis liguls consectetut, utrices maure Maecenas Wiss maltis telua. fulam quis impardet augue betl tuulum auesat arate lec, non susc oit manta inarim ou",
    },
  ];

  // ADDITIONAL SECTION: "Design" (Whimsical & Figma)
  const designTools = [
    {
      name: "Whimsical",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    },
    {
      name: "Figma",
      description:
        "We initially adopted Figma primarily as a design tool, but it has evolved into our virtual whiteboard that serves the entire company. The unexpected allure turned out to be the powerful collaboration features it offers.",
    },
  ];
// NEW SECTION: PRODUCTIVITY
  const productivityTools = [
  {
    name: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    name: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    name: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    name: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Intro */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Here’s a list of tools and tech that power my daily workflow — from
          development to design to general productivity.
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-12">
        {/* DEVELOPMENT TOOLS */}
        <UsesSection title="Development Tools" items={developmentTools} />

        {/* DESIGN TOOLS (from the screenshot) */}
        <UsesSection title="Design" items={designTools} />

        {/* PRODUCTIVITY TOOLS */}
        <UsesSection title="Productivity" items={productivityTools} />
      </div>
      </div>
  );
}

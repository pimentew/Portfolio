export default function SkillsCard() {
  const skills = [
    { name: "HTML", level: 90, icon: "/html.svg", color: "bg-teal-500" },
    { name: "CSS", level: 75, icon: "/css.svg", color: "bg-teal-500" },
    { name: "JavaScript", level: 85, icon: "/javascript.svg", color: "bg-teal-500" },
  ];

  return (
    <div
      data-testid="skillsCard"
      className="flex flex-col gap-4 p-6 border border-gray-200 dark:border-gray-700 rounded-md max-w-md shadow-md bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      {/* Top title row */}
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-500 dark:text-gray-300"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.261 1.03462C12.6971 1.15253 13 1.54819 13 1.99997V8.99997H19C19.3581 8.99997 19.6888 9.19141 19.8671 9.50191C20.0455 9.8124 20.0442 10.1945 19.8638 10.5038L12.8638 22.5038C12.6361 22.8941 12.1751 23.0832 11.739 22.9653C11.3029 22.8474 11 22.4517 11 22V15H5C4.64193 15 4.3112 14.8085 4.13286 14.498C3.95452 14.1875 3.9558 13.8054 4.13622 13.4961L11.1362 1.4961C11.3639 1.10586 11.8249 0.916719 12.261 1.03462ZM6.74104 13H12C12.5523 13 13 13.4477 13 14V18.301L17.259 11H12C11.4477 11 11 10.5523 11 9.99997V5.69889L6.74104 13Z"
          />
        </svg>

        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Skills</h2>
      </div>

      {/* Skill items */}
      {skills.map((skill) => (
        <div key={skill.name} className="flex gap-3 items-start">
          {/* Icon on the left */}
          <img src={skill.icon} alt={`${skill.name} Icon`} className="w-6 h-6 mt-1" />

          {/* Name above bar */}
          <div className="flex flex-col w-full">
            <span className="text-xs font-semibold text-gray-800 dark:text-white">{skill.name}</span>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 mt-1 rounded">
              <div className={`${skill.color} h-2 rounded`} style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

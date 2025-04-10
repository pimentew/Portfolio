export default function WorkCard() {
  const workHistory = [
    {
      logo: "/slack.svg",
      name: "Slack",
      title: "Software Engineer",
      years: "2016 - Present",
    },
    {
      logo: "/spotify.svg",
      name: "Spotify",
      title: "Frontend Engineer",
      years: "2014 - 2015",
    },
  ];

  return (
    <div
      data-testid="workCard"
      className="flex flex-col gap-3 p-6 border border-gray-200 dark:border-gray-700 rounded-md max-w-md shadow-md bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-6 h-6 text-gray-500 dark:text-gray-300"
          aria-hidden="true"
        >
          <path
            d="M488.727,100.848H372.364V31.03c0-12.853-10.42-23.273-23.273-23.273H162.909c-12.853,0-23.273,10.42-23.273,23.273
      v69.818H23.273C10.42,100.848,0,111.268,0,124.121v170.667c0,11.247,8.045,20.885,19.11,22.897l11.92,2.166V480.97
      c0,12.853,10.42,23.273,23.273,23.273h403.394c12.853,0,23.273-10.42,23.273-23.273V319.851l11.922-2.166
      c11.064-2.012,19.108-11.65,19.108-22.897V124.121C512,111.268,501.58,100.848,488.727,100.848z M186.182,54.303h139.636v46.545
      H186.182V54.303z M434.424,457.697H77.576V328.315l93.091,16.925v27.124c0,12.853,10.42,23.273,23.273,23.273h124.121
      c12.853,0,23.273-10.42,23.273-23.273v-27.122l93.091-16.925V457.697z M217.212,349.091v-46.545h77.576v46.545H217.212z
       M465.455,275.364l-124.121,22.568v-18.66c0-12.853-10.42-23.273-23.273-23.273H193.939c-12.853,0-23.273,10.42-23.273,23.273
      v18.66L46.545,275.364V147.394h116.364h186.182h116.364V275.364z"
          />
        </svg>

        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Work</h2>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      </p>

      {workHistory.map((job) => (
        <div key={job.name} className="flex gap-2 items-start">
          <img
            src={job.logo}
            alt={`${job.name} Logo`}
            className="w-9 h-9 rounded-full p-1 border border-gray-200 dark:border-gray-700"
            data-testid="workCardLogo"
          />
          <div className="flex-1">
            <h2 className="text-base font-semibold text-gray-800 dark:text-white" data-testid="workCardCompany">
              {job.name}
            </h2>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-300">{job.title}</p>
              <span className="text-xs text-gray-400 dark:text-gray-400 whitespace-nowrap">{job.years}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

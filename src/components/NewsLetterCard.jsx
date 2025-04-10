export default function NewsletterCard() {
  return (
    <div
      data-testid="newsletterCard"
      className="flex flex-col gap-3 p-6 border border-gray-200 dark:border-gray-700 rounded-md max-w-md shadow-md bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 p-1 text-gray-500 dark:text-gray-300"
          aria-hidden="true"
        >
          <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" />
        </svg>

        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Stay up to date</h2>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>

      <form className="flex">
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 rounded-l border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <button
          type="submit"
          className="rounded-r bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Join
        </button>
      </form>
    </div>
  );
}

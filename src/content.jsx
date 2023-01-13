import CardComponent from "./details"

const Content = () => {
  return (
    <div className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-mono text-3xl font-bold text-gray-900  ">
          Devs connect
        </h2>

        <form className="mb-8">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-7 h-7 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              class="block w-full p-4 pl-10 text-xl text-blue-600 border border-gray-300 rounded-xl bg-white drop-shadow-lg"
              placeholder="Search for a dev..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
      <CardComponent />

      </div>

     
    </div>
  );
};
export default Content;

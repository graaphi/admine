export default () => (
  <div className="flex flex-col w-full min-h-screen bg-gray-100 md:flex-row">
    <div className="bg-indigo-900 text-gray-100 flex flex-col lg:justify-center lg:w-8/12 px-10 lg:px-20">
      <div className="py-4">
        <span className="font-normal text-lg">Admine</span>
      </div>
      <div className="py-10">
        <h1 className="text-4xl font-semibold leading-tight mb-4 lg:pr-10">
          Collection of beautiful and open source administration pages.
        </h1>
        <p className="text-lg text-gray-300">Fully responsive HTML administration pages.</p>
        <div className="flex flex-col pt-10 md:items-center md:flex-row">
          <a href="/layouts" className="rounded bg-white shadow-md text-center text-indigo-900 font-medium text-lg px-8 py-4 leading-tight transition-all ease-in-out duration-300 transform hover:-translate-y-1 hover:shadow-xl" role="button">
            Explore layouts
          </a>
        </div>
      </div>
    </div>
  </div>
);

import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

const Home = () => (
  <div className="flex flex-col w-full min-h-screen bg-gray-100 md:flex-row">
    <Head>
      <title>Admine | Graaphi</title>
    </Head>
    <div className="bg-indigo-900 text-gray-100 flex flex-col lg:justify-center lg:w-8/12 px-10 lg:px-20">
      <div className="py-4 inline-flex items-center">
        <svg class="w-6 h-auto mr-2" width="110" height="97" viewBox="0 0 110 97" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="fill-current text-teal-400" d="M0 85.9375C0 88.6725 1.08649 91.2956 3.02046 93.2295C4.95443 95.1635 7.57746 96.25 10.3125 96.25H99.6875C102.423 96.25 105.046 95.1635 106.98 93.2295C108.914 91.2956 110 88.6725 110 85.9375V37.8125C110 35.0775 108.914 32.4544 106.98 30.5205C105.046 28.5865 102.423 27.5 99.6875 27.5H10.3125C7.57746 27.5 4.95443 28.5865 3.02046 30.5205C1.08649 32.4544 0 35.0775 0 37.8125L0 85.9375Z" />
          <path class="fill-current text-teal-500" fill-rule="evenodd" clip-rule="evenodd" d="M13.75 17.1875C13.75 18.0992 14.1122 18.9735 14.7568 19.6182C15.4015 20.2628 16.2758 20.625 17.1875 20.625H92.8125C93.7242 20.625 94.5985 20.2628 95.2432 19.6182C95.8878 18.9735 96.25 18.0992 96.25 17.1875C96.25 16.2758 95.8878 15.4015 95.2432 14.7568C94.5985 14.1122 93.7242 13.75 92.8125 13.75H17.1875C16.2758 13.75 15.4015 14.1122 14.7568 14.7568C14.1122 15.4015 13.75 16.2758 13.75 17.1875ZM27.5 3.4375C27.5 4.34918 27.8622 5.22352 28.5068 5.86818C29.1515 6.51284 30.0258 6.875 30.9375 6.875H79.0625C79.9742 6.875 80.8485 6.51284 81.4932 5.86818C82.1378 5.22352 82.5 4.34918 82.5 3.4375C82.5 2.52582 82.1378 1.65148 81.4932 1.00682C80.8485 0.362164 79.9742 0 79.0625 0H30.9375C30.0258 0 29.1515 0.362164 28.5068 1.00682C27.8622 1.65148 27.5 2.52582 27.5 3.4375Z" />
        </svg>
        <span className="font-medium text-lg pl-px">
          admine
        </span>
      </div>
      <div className="py-10">
        <h1 className="text-4xl font-semibold leading-tight mb-4 lg:pr-10">
          Collection of beautiful and open source administration pages.
        </h1>
        <p className="text-lg text-gray-300 lg:pr-20">Fully responsive HTML administration pages based on the amazing <a className="text-white font-medium" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">@tailwindcss</a> and inspired by <a className="text-white font-medium" href="https://dribbble.com/search/administrator" target="_blank" rel="noopener noreferrer">community work</a>.</p>
        <div className="flex flex-col pt-10 md:items-center md:flex-row">
          <Link href="/layouts">
            <a className="rounded bg-white shadow-md text-center text-indigo-900 font-medium text-lg px-8 py-4 leading-tight hover:shadow-xl" role="button">
              Explore layouts
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

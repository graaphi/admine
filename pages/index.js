import React from 'react';

import Link from 'next/link';

import Head from '../components/Head';
import Logo from '../components/Logo';
import Page from '../components/Page';

const Home = () => (
  <Page bgColor="bg-gray-900">
    <Head title="Home" />
    <div className="bg-indigo-900 text-gray-100 flex flex-col lg:justify-center lg:w-8/12 px-10 lg:px-20">
      <Logo />
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
  </Page>
);

export default Home;

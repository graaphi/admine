import React from 'react';

import Head from '../Head';
import Logo from '../Logo';

const LoadingIndicator = () => (
  <>
    <Head title="Loading" />
    <div className="flex justify-center items-center min-h-screen w-full bg-purple-900 text-white space-x-4">
      <Logo />
      <span className="text-purple-400">|</span>
      <div className="spinner" />
      <h4 className="font-normal text-sm">
        Loading...
      </h4>
    </div>
  </>
);

export default LoadingIndicator;

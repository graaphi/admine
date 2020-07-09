import React from 'react';

import Logo from '../Logo';

const LoadingIndicator = () => (
  <div className="flex justify-center items-center min-h-full w-full bg-purple-900 text-white space-x-4">
    <Logo />
    <span className="text-purple-400">|</span>
    <h4 className="font-normal text-sm">
      Loading...
    </h4>
  </div>
);

export default LoadingIndicator;

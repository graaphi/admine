import React from 'react';

import Link from 'next/link';

import Logo from '../Logo';

const Navbar = () => (
  <header className="bg-purple-900">
    <div className="container max-w-screen-xl mx-auto px-10">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </div>
  </header>
);

export default Navbar;

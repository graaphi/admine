import React from 'react';

import dynamic from 'next/dynamic';

const PaymentApplication = dynamic(() => import('../layouts/payment-application.mdx'));

const Layouts = () => (
  <div className="flex flex-col w-full min-h-screen bg-white md:flex-row">
    <PaymentApplication />
  </div>
);

export default Layouts;

import dynamic from 'next/dynamic';

import categories from '../constants/categories';

const PaymentApplication = dynamic(() => import('./payment-application.mdx'));



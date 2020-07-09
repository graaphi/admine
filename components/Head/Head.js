import React from 'react';
import PropTypes from 'prop-types';

import { default as NextHead } from 'next/head';

const defaultProps = {};

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Head = ({
  title,
}) => (
  <NextHead>
    <title>
      {`${title} | Admine`}
    </title>
  </NextHead>
);

Head.defaultProps = defaultProps;
Head.propTypes = propTypes;

export default Head;

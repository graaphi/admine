import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const defaultProps = {
  bgColor: 'bg-gray-100',
  direction: 'row',
};

const propTypes = {
  bgColor: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'col']),
  children: PropTypes.node.isRequired,
};

const Page = ({
  bgColor,
  direction,
  children,
}) => (
  <div
    className={classnames(
      'flex flex-col w-full min-h-screen',
      direction === 'row' && 'lg:flex-row',
      bgColor,
    )}
  >
    {children}
  </div>
);

Page.defaultProps = defaultProps;
Page.propTypes = propTypes;

export default Page;

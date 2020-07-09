import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from 'next/link';

const defaultProps = {};

const propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const LayouItem = ({
  slug,
  title,
}) => {
  const [isHover, setHover] = useState(false);

  return (
    <Link href={'/[layout]'} as={`/${slug}`}>
      <a
        className="rounded bg-white border border-gray-300"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="p-px">
          <div
            className={classnames(
              'w-full h-48 rounded-t',
              !isHover && 'bg-gray-100',
              isHover && 'bg-gray-50',
            )}
          />
          <div className="px-5 py-4">
            <h2 className="font-medium text-base">
              {title}
            </h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

LayouItem.defaultProps = defaultProps;
LayouItem.propTypes = propTypes;

export default LayouItem;

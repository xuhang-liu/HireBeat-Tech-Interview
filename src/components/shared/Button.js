import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

/** @jsx jsx */
export const Button = ({ children, ...others }) => {
  return (
    <button 
      css={css`
        background-color: #00375D;
        color: #FFFFFF;
        border-radius: 5px;
        border: none;
        padding: 10px 25px;
        font-size: 12px;
        cursor: pointer;
        &:hover {
          background-color: #005F9F;
        }
      `}
      {...others}>
        {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired, 
};

Button.defaultProps = {
};
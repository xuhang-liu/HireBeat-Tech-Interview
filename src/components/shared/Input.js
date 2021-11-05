import { css, jsx } from '@emotion/core';
// import PropTypes from 'prop-types';

/** @jsx jsx */
export const Input = ({ ...others }) => {
  return (
    <input 
      css={css`
        display: block;
        width: 94%;
        padding: .375rem 15px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      `}
      {...others} />
  );
};

Input.propTypes = {
};

Input.defaultProps = {
};
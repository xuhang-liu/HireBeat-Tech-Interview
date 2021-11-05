import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

/** @jsx jsx */
export const NavBarItem = ({ children, ...others }) => {
  return (
    <div css={css`
          padding: 10px 30px;
          color: black;
          position: relative;
          svg {
            font-size: 20px;
          }
          .notification-counter {
            background-color: #D52023;
            color: #ffffff;
            width: 18px;
            display: block;
            position: absolute;
            top: 0;
            left: 50%;
            text-align: center;
            padding: 2px;
            border-radius: 25px;
            font-weight: bold;
            border: #ffffff 2px solid;
            font-size: 13px;
          }
        `} 
        className="navbar-item" {...others}>
        { children }
    </div>
  );
};

NavBarItem.propTypes = {
  children: PropTypes.any,
};
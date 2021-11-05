import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { NavBarItem } from './NavBarItem';

/** @jsx jsx */
export const NavBar = ({ children, logo, ...others }) => {
  return (
    <div css={css`
        background-color: #ffffff;
        width: 100%;
        padding: 10px;
        -webkit-box-sizing: border-box; 
        -moz-box-sizing: border-box; 
        box-sizing: border-box;   

        .container {
          justify-content: space-between;
          flex-direction: row;
          display: flex;
        }

        .logo-container {
          display: flex;
          vertical-align: middle;
          img {
            height: 30px;
          }
        }

        .children-container {
          display: flex;
          vertical-align: middle;
        }
      `}
      {...others}>
        <div className="container">
          <div className="logo-container">
              <img src={ logo } />
          </div>
          <div className="children-container">
              { children }
          </div>
        </div>
    </div>
  );
};

NavBar.Item = NavBarItem;

NavBar.propTypes = {
  logo: PropTypes.string.isRequired,
  children: PropTypes.any,
};
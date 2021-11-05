import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

/** @jsx jsx */
export const Tabs = ({ children, tabs, selected, setTab, setPane, ...others }) => {
  return (
    <div css={css`
        .tab-buttons {
          .button {
            display: inline-block;
            border-radius: 5px 5px 0 0;
            border: none;
            padding: 10px 25px;
            margin: 0 5px;
            font-size: 12px;
            cursor: pointer;
            &:hover {
              background-color: #efefef;
            }
            &.selected {
              background-color: #00375D;
              color: #FFFFFF;
              &:hover {
                background-color: #00375D;
              }
            }
            /* cursor: pointer; */
          }
        }
      `}
      {...others}>
        <div className="tab-buttons">
          { tabs.map((t,i) =><div key={`tab-button-${i}`} className={`button ${selected === i ? 'selected' : ''}`}><span onClick={ () => setPane(i)}>{ t }</span></div>)}
        </div>
        <div className="panes">
          {children}
        </div>
    </div>
  );
};

Tabs.propTypes = {
  selected: PropTypes.number,
  tabs: PropTypes.array,
  children: PropTypes.any, 
};

Tabs.defaultProps = {
  tabs: [],
  selected: '',
};

export const TabPane = ({ children, selected }) => {
  return (
    <div className={`pane ${selected ? 'selected': ''}`} css={css`
      display: none;
      padding: 15px;
      &.selected {
        display: block;
      }

    `}>
      {children}
    </div>
  );
};

TabPane.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.any, 
};

TabPane.defaultProps = {
  selected: false,
};

Tabs.Pane = TabPane;
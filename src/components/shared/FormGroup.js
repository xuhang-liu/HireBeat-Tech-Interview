import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

/** @jsx jsx */
export const FormGroup = ({ label, children, errors }) => {
    // const theme = useTheme();
    return <div css={css`
            margin-bottom: 10px;
            label {
                margin: 5px 0;
                display: block;
            }
        `} className={`form-group ${Object.values(errors).length > 0 ? 'errors' : ''}`}>
        <label>{ label }</label>
        <div>{ children }</div>
    </div>;
};

FormGroup.propTypes = {
    label: PropTypes.string.isRequired,
    errors: PropTypes.object,
    children: PropTypes.any,
};

FormGroup.defaultProps = {
    errors: {}
};
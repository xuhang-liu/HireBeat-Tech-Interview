import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = ({ userData }) => {
    return (
        <div className="footer">
            Welcome { userData && userData.email }!
        </div>
    );
}

Footer.propTypes = {
    userData: PropTypes.object,
};

const mapStateToProps = state => ({
    userData: state.auth.userData,
});

export default connect(mapStateToProps, null)(Footer);
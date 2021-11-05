import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavBar } from '../shared/NavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../assets/logo.png';

import { fetchUserData } from '../../services/AuthService';
import { useState, useEffect } from 'react';

const MainLayout = ({ component: Komponent, section, ...rest }) => {
    const [ user, setUser ] = useState([]);

    useEffect(() => {
        fetchUserData().then(r => {
        })
    }, []);
    return <Route {...rest} render={matchProps => {
        return <div>
                    <NavBar logo={logo}>
                        <NavBar.Item>
                            <FontAwesomeIcon icon="user" /> User
                        </NavBar.Item>
                    </NavBar>
                    <Komponent {...matchProps} />
                </div>;
        }} />;
};

MainLayout.propTypes = {
    component: PropTypes.any,
    section: PropTypes.any,
};

MainLayout.defaultProps = { 
    section: null
};

export default MainLayout;


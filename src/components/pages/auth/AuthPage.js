import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import logo from '../../../assets/logo.png';

// Authentication
import { loginRequest } from '../../../services/AuthService';
import { setUserData } from '../../state/actions/AuthActions';

import { Button, FormGroup, Input } from '../../shared';

const AuthPage = ({ setUserData, history }) => {
    const [username, setUsername] = useState('xuhang@hirebeat.com');
    const [password, setPassword] = useState('12345678');

    const onLoginSubmit = () => {
        loginRequest({ username, password }).then(response => {
            if(response.data.success) {
                setUserData(response.data.data.user);
                history.push('/dashboard');
            }
        });
    };
    
    return (
        <div className="login-window">
            <div className="logo">
                <img src={logo} />
            </div>
            <FormGroup label="E-mail address">
                <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </FormGroup>
            <FormGroup label="Password">
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </FormGroup>
            <Button type="primary" onClick={onLoginSubmit}>Login</Button>
        </div>
    );
};

AuthPage.propTypes = {
    setUserData: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    userData: PropTypes.object,
};

const mapStateToProps = state => ({
    userData: state.auth.userData,
});

const mapDispatchToProps = dispatch => {
    const action = bindActionCreators({ setUserData }, dispatch);
    return { ...action, dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
import React from 'react';

import bbLogo from '../../assets/images/run-it-back-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={bbLogo} alt="RunItBack" />
    </div>
);

export default logo;
import React from 'react';
import SocialNetwork from '../SocialNetwork';
import './styles.css';

function UnderFooter() {
    return (<>

        <div className='under--footer--container'>
            <div className='under--footer--content'>
                <span className='copyright'>
                    <span style={{ color: "var(--color-gris)" }}>© 2020</span> MediCenter Layout.
                <span style={{ color: "var(--color-gris)" }} > All rights reserved.</span>
                </span>
                <div className='copyright-2'>
                    <span >Privacy</span>
                    <span style={{ marginLeft: "12px" }}>Terms</span>
                    <span style={{ marginLeft: "12px" }}>Developed by CaloWeb</span>
                    <SocialNetwork size='22' color="#fff" />
                </div>
            </div>
        </div>
    </>);
}

export default UnderFooter;
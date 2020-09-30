

import React from 'react';
import Banner from '../Banner'
import Menu from '../Menu'
// import { Container } from './styles';

function Header({ makeUpMenu, sizeIcon, upHeaderContent }) {
    return <>
        <Menu makeUpMenu={makeUpMenu} sizeIcon={sizeIcon} />
        <Banner upHeaderContent={upHeaderContent} />
    </>;
}

export default Header;
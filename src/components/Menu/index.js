import React, { useRef } from 'react';
import SocialNetwork from '../SocialNetwork';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPhoneAndroid, MdKeyboardArrowDown } from 'react-icons/md';
import { BiEnvelope } from 'react-icons/bi';
import { FcMenu } from 'react-icons/fc'
import { IoMdClose } from 'react-icons/io';

import Logo from '../../assets/logo.png';
import './styles.css';


function Menu({ makeUpMenu, sizeIcon }) {

    const MenuSandwich = useRef();
    const menuHamburguer = MenuSandwich.current;




    function navBarOpen() {


        // const MenuSandwich = document.querySelector('nav');
        // const btOpen = document.getElementById('fcmenu');
        // const btClose = document.getElementById('GrClose');
        // MenuSandwich.style.display = 'block';
        // btOpen.style.display = 'none';
        // btClose.style.display = 'block';
        // document.querySelector('body').addEventListener('click', navBarClose)


    }

    function navBarClose() {
        // const MenuSandwich = document.querySelector('nav');
        // const btOpen = document.getElementById('fcmenu');
        // const btClose = document.getElementById('GrClose');
        // MenuSandwich.style.display = 'none';
        // btOpen.style.display = 'block';
        // btClose.style.display = 'none';
    }

    return (
        <>
            <header className={makeUpMenu ? "menu--up" : ''} >
                <div className='box-menu--top'>
                    <div className="menu--top"  >
                        <div className="menu--top-content">
                            <a href='#' ><HiOutlineLocationMarker size={sizeIcon} /> <span>2702 Memory Lane, Chicago, IL 60605</span></a>
                            <a href='#' className="telephone">  <MdPhoneAndroid size={sizeIcon} /><span>(510) 210-5225</span></a>
                            <a href='#' className="email"> <BiEnvelope size={sizeIcon} /> <span>contact@medicenter.com</span></a>
                        </div>
                        <div>
                            <SocialNetwork size={18} color="#b6bba9" />
                        </div>
                    </div>
                </div>

                <div className={makeUpMenu ? "menu--box" : 'menu--box--down'}>
                    <div className={makeUpMenu ? "menu--container-down" : 'menu--container'}>
                        <div className="logo">
                            <img
                                src={Logo}
                                alt="logo"
                            />
                        </div>

                        <nav className={makeUpMenu ? "menu" : 'menu--down'} ref={MenuSandwich}>
                            <ul>
                                <li><a className="active" href=""><span>HOME</span><MdKeyboardArrowDown /></a></li>
                                <li><a href="#"><span>BLOG</span> <MdKeyboardArrowDown /></a></li>
                                <li><a href="#"><span>PAGES</span><MdKeyboardArrowDown /></a></li>
                                <li><a href="#"><span>DEPARTEMENTS</span><MdKeyboardArrowDown /></a></li>
                                <li><a href="#"><span>TIME TABLE</span><MdKeyboardArrowDown /></a></li>
                                <li><a href="#"><span>GALLERY</span><MdKeyboardArrowDown /></a></li>
                                <li><a href="#"><span>CONTACT</span><MdKeyboardArrowDown /></a></li>
                                <li><a href="#"><span>SHOP</span><MdKeyboardArrowDown /></a></li>
                            </ul>
                        </nav>
                        <FcMenu size={40} onClick={navBarOpen} className="menu--sandwich" id="fcmenu" />
                        <IoMdClose size={40} color="#b6bba9" className="menu--sandwich-close" onClick={navBarClose} id="GrClose" />
                    </div >
                </div>
            </header>

        </>
    );
}

export default Menu;
import React from 'react';
import Etiquette from '../Etiquette'
import { RiRoadMapLine } from 'react-icons/ri'
import { IoMdCall } from 'react-icons/io'
import { SiMinutemailer } from 'react-icons/si'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { GiSmartphone } from 'react-icons/gi'
import './styles.css';

function Footer() {
    return (
        <footer className='footer--container'>
            <section className='footer--content'>
                <div className='footer--content--options'>
                    <div className='footer--content--options-opt1'>
                        <RiRoadMapLine className="iconSize" color="#ffff" />
                        <div className='footer--content--opts-infos'>
                            <div className='footer--content--opts-infos-1'>Find a clinic near you</div>
                            <div className='footer--content--opts-infos-2'>Find Us On Map</div>
                        </div>
                    </div>
                    <div className='footer--content--options-opt2'>
                        <IoMdCall className="iconSize" color="#ffff" />
                        <div className='footer--content--opts-infos'>
                            <div className='footer--content--opts-infos-1'>Call for an appointment!</div>
                            <div className='footer--content--opts-infos-2'>(610) 590-3233</div>
                        </div>
                    </div>
                    <div className='footer--content--options-opt3'>
                        <SiMinutemailer className="iconSize" color="#ffff" />
                        <div className='footer--content--opts-infos'>
                            <div className='footer--content--opts-infos-1'>Feel free to message us!</div>
                            <div className='footer--content--opts-infos-2'>Send an Email</div>
                        </div>
                    </div>
                </div>
                <div className='footer--content--links' style={{ boxSizing: "border-box" }}>
                    <div className='footer--content--links-column1'>
                        <Etiquette title='About Us' />
                        <div className='footer--content--links-column1-description greys'>
                            Praeter oppida multa duae civitates exornant Seleucia opus
                            Seleuci regis, et Claudiopolis quam deduxit coloniam Claudius!
                        </div>

                        <div className='footer--content--abouts-us greys'>
                            <HiOutlineLocationMarker size={20} color="#b6bba9" />
                            <div className='footer--content--abouts-us-infos'>
                                <div className='footer--content--abouts-us-infos-1'>2702 Memory Lane</div>
                                <div className='footer--content--abouts-us-infos-1'>Chicago, IL 60605</div>
                            </div>
                        </div>
                        <div className='footer--content--abouts-us '>
                            <GiSmartphone size={20} color="#b6bba9" />
                            <div className='footer--content--abouts-us-infos'>
                                <div className='footer--content--abouts-us-infos-1'>(610) 590-3233</div>
                                <div className='footer--content--abouts-us-infos-1'>(610) 590-3233</div>
                            </div>
                        </div>
                        <div className='footer--content--abouts-us'>
                            <AiOutlineMail size={20} color="#b6bba9" />
                            <div className='footer--content--abouts-us-infos'>
                                <div className='footer--content--abouts-us-infos-1'>booking@medicenter.com</div>
                            </div>
                        </div>
                    </div>

                    <div className='footer--content--links-column2'>
                        <Etiquette title='Additional Links' />
                        <div className="footer--content--links-column2-ul" >

                            <ul>
                                <li>About</li>
                                <li>Pricing</li>
                                <li>Doctors</li>
                                <li>Departments</li>
                                <li>Blog</li>
                                <li>Timetable</li>
                            </ul>
                            <ul>
                                <li>Medical</li>
                                <li>CareGallery</li>
                                <li>Shop</li>
                                <li>Contact</li>
                                <li>Shortcodes</li>

                            </ul>
                        </div>

                    </div>
                    <div className='footer--content--links-column3'>
                        <Etiquette title='Latest Posts' />
                        <div className='footer-last-post-pt1'>
                            <div>
                                <div className='footer-last-post-title'>Can breakfast help keep us thin? Nutrition science is tricky</div>
                                <div className='footer-last-post-date greys'>JAN 5, 2017</div>
                            </div>
                            <div>
                                <div className='footer-last-post-title'>Can breakfast help keep us thin? Nutrition science is tricky</div>
                                <div className='footer-last-post-date greys'>JAN 5, 2017</div>
                            </div>
                            <div>
                                <div className='footer-last-post-title'>Can breakfast help keep us thin? Nutrition science is tricky</div>
                                <div className='footer-last-post-date greys'>JAN 5, 2017</div>
                            </div>
                            <div>
                                <div className='footer-last-post-title'>Can breakfast help keep us thin? Nutrition science is tricky</div>
                                <div className='footer-last-post-date greys'>JAN 5, 2017</div>
                            </div>
                        </div>
                    </div>
                    <div className='footer--content--links-column4'>
                        <Etiquette title='Latest Tweets' />
                        <div className='footer-last-tweet-pt1'>
                            <div>
                                <div className='footer-last-tweet-description'>
                                    We've released new version (v3.4) of our Dynamic #Step Process #Panels #WP #Tabs Plugin. Please check at #CodeCanyon
                                </div>
                                <div className='footer-last-tweet-link'><a href="#">voir sur tweet</a></div>
                            </div>
                            <div>
                                <div className='footer-last-tweet-description'>
                                    We've released new version (v3.4) of our Dynamic #Step Process #Panels #WP #Tabs Plugin. Please check at #CodeCanyon
                                </div>
                                <div className='footer-last-tweet-link'><a href="#">See more...</a></div>
                            </div>
                            <div>
                                <div className='footer-last-tweet-description'>
                                    We've released new version (v3.4) of our Dynamic #Step Process #Panels #WP #Tabs Plugin. Please check at #CodeCanyon
                                </div>
                                <div className='footer-last-tweet-link'><a href="#">See more...</a></div>
                            </div>
                            <div>
                                <div className='footer-last-tweet-description'>
                                    We've released new version (v3.4) of our Dynamic #Step Process #Panels #WP #Tabs Plugin. Please check at #CodeCanyon
                                </div>
                                <div className='footer-last-tweet-link'><a href="#">See more...</a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </footer>)
}

export default Footer;
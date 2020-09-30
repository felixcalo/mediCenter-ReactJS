import React from 'react';
import { TiSocialTwitter, TiSocialFacebook, TiSocialPinterestCircular, TiSocialGithub } from 'react-icons/ti';
import './styles.css'
function SocialNetwork({ size, color }) {
    return <div className='sociaNet'>
        <a href="#"><TiSocialTwitter size={size} color={color} /></a>
        <a href="#"><TiSocialFacebook size={size} color={color} /></a>
        <a href="#"><TiSocialPinterestCircular size={size} color={color} /></a>
        <a href="#"><TiSocialGithub size={size} color={color} /></a>
    </div>;
}

export default SocialNetwork;
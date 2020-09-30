import React from 'react';
import Imgdoctor from '../../assets/dr.jpg'

import './styles.css';

function Article({ title, comment, description, date }) {
    return <>

        <section className='articles--container'>
            <article className='articles--content'>
                <div className='article-content-date'>
                    <div className='article-content-bodyDate'>
                        <div className='article-content-body-date'>{date}</div>
                        <div className='article-content-body-retangle-date'></div>
                    </div>
                    <div className='article-content-bodyComment'>{comment}</div>
                </div>
                <div className='articles--content--infos'>
                    <div className='articles--content--infos-img'>
                        <img src={Imgdoctor} alt='' />
                    </div>
                    <div className='articles--content--infos--title'>{title}</div>
                    <div className='articles--content--infos-description'>{description}</div>
                    <div className='articles--content--infos-footer'>ADMIN | GENERAL, OPHTHALMOLOGY CLINIC</div>
                </div>
            </article>

        </section>
    </>
}

export default Article;
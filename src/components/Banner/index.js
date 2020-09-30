import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import './styles.css';

function Banner({ upHeaderContent }) {
    return <>

        <section className={upHeaderContent ? "banner--down" : 'banner--normal'}>
            <div className='banner-content'>
                <div className='banner-content-infos'>
                    <div className='banner-content-infos-title'>Modern. Elegant.</div>
                    <div className='banner-content-infos-title-logo'>Medicenter</div>
                    <div className='banner-content-infos-decription'>
                        Here at medicenter we have individual doctor's lists. Click read more below to see services and current timetable for our doctor
                    </div>

                </div>


                <div className=" banner-bottons-and-options">
                    <div className="banner-slides-buttons">
                        <div className='banner-slides-buttons-bt1'>1</div>
                        <div className='banner-slides-buttons-bt2'>2</div>
                        <div className='banner-slides-buttons-bt3'>3</div>
                    </div>
                    <div className='banner-content-options'>
                        <div className='banner-content-options-opt1'>
                            <h1>Emergency Case</h1>
                            <div>If you need a doctor urgently outside of medicenter opening hours, call emergency appointment number for emergency service.</div>
                            <button type='button'><h1>READ MORE</h1> <BsArrowRight /></button>
                        </div>
                        <div className='banner-content-options-opt2'>
                            <h1>Doctors Timetable</h1>
                            <div>
                                Here at medicenter we have individual doctor's lists. Click read more below to see services and current timetable for our doctors.</div>
                            <button type='button'><h1>READ MORE</h1> <BsArrowRight /></button>
                        </div>
                        <div className='banner-content-options-opt3'>
                            <div>
                                Monday - Thursday8.00 - 17.00
                                Friday9.00 - 18.00
                                Saturday9.30 - 17.30
                       </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>

    </>
}

export default Banner;
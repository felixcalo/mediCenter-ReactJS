import React from 'react';

// import { Container } from './styles';

function Etiquette({ title }) {
    return (<>
        <div className='widget-title'>
            <div className="widget-title-text">{title}</div>
            <div className='widget-title-bar'></div>
        </div>
    </>);
}

export default Etiquette;
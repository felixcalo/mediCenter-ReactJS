import React from 'react';
import Etiquette from '../Etiquette';

import './styles.css';

function Aside() {
    return (
        <>
            <Etiquette title="Departments" />
            <article>description</article>
            <Etiquette title="Make An Appointment" />
            <article>Make Anpointement</article>
        </>)
}

export default Aside;
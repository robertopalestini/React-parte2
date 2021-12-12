import React from 'react'
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <section className='holder'>
            <div className='historia'>
                <h2>Historia</h2>
                <p>Lorem</p>
            </div>
            <h2>Staff</h2>
            <div className='personas'>
                <div className='persona'>
                    <img src='images/nosotros/nosotros1.jpg' width='75' alt='Juan' />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem</p>
                </div>
            </div>
        </section>
    );
}

export default NosotrosPage;
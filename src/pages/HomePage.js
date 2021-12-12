import React from 'react'
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='homeimg'>
            <img src='images/home/img01.jpg' alt='avion'/>  
            </div>

            <div className='columnas'>
                <div className='bienvenidos left'>
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum do</p>
                </div>
                <div className='testimonios right'>
                    <h2>Testimonios</h2>
                    <div className='testimonios'>
                        <span className='cita'>Simplemente excelente</span>
                        <span className='autor'>Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
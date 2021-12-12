import React from 'react'
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
               <div className='logo'> 
                    <img src='images/logo.png' width='100' alt='rober palestini' />
                    <h1>Rober Palestini</h1>
               </div>
            </div>

        </header>
    );
}

export default Header;
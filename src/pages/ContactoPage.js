import React from 'react'
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna contacto">
                <h2>Contactanos mediante el siguiente formulario.</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email"/>
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="text" name="telefono"/>
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="nombre"> </textarea>
                    </p>
                    <p className="centrar">
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>

            <div className="columna datos">
                <h2>Información de Contacto</h2>
                <p>Atención personalizada los 365 días del año.</p>
                <ul>
                    <li>Telefono: (223)6 24-2570</li>
                    <li>E-mail: robertoadrianpalestini@yahoo.com.ar</li>
                    <li>Linkedin: <a href="//https://www.linkedin.com/in/robert-a-palestini-483586b1/">Robert A. Palestini</a></li>
                    <li>Freelancer.com: <a href="//https://www.freelancer.com/u/roberpalestini">/roberpalestini</a></li>
                </ul>
            </div>

        </main>
    );
}

export default ContactoPage;
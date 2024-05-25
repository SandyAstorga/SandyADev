import { Icons } from "../../components/Icons/Icons";
import profile from "../../assets/perfil2.png"

export const About = () => {
    return (
        <div className="container-template">
            <div className="container-about">
                <section className="container-profile">
                    <img  style={{width: '150px'}} src={profile} alt="profile" />
                </section>
                <section className="resume">
                <h1>Hola!,  Soy Sandra Astorga.</h1>
                <br />
                <p>Soy Desarrolladora Web Full Stack con educación profesional en Ingeniería en Sistemas Computacionales, lo que me ha permitido comprender la relevancia de las tecnologías en el mundo actual.</p>
                <br />
                <p>Mi enfoque principal se centra en el Front-end, donde he concentrado mis esfuerzos en proyectos recientes.</p>
                <br />
                <p>Mis conocimientos en tecnologías como JavaScript, React, HTML, entre otras, están en proceso de desarrollo a un nivel junior, pero tengo una fuerte motivación para aprender y crecer. Estoy entusiasmada con la oportunidad de seguir desarrollándome como profesional y aprender en equipo.</p>
                </section>
                <br />
            </div>
            <div className="back-icons">
                <Icons />
            </div>
        </div>
    )
};

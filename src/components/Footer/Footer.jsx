import { Link } from "react-router-dom";
import { handleUp } from "../../helpers/utils";

export const Footer = () => {

    return (
        <>
            <footer>
                <section>
                    <h1>Hecho con ❤️ por <a href="https://github.com/SandyAstorga" target="_blank">Sandy Astorga</a></h1>
                </section>
                <section className="f-menu">
                    <Link to={'/'} className="option" onClick={handleUp}>Home</Link>
                    <Link to={'/about-me'} className="option" onClick={handleUp}>Acerca de mi</Link>
                    <p>Portfolio</p>
                </section>
            </footer>
        </>
    )
}

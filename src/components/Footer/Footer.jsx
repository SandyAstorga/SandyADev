import { Link } from "react-router-dom";
import { handleUp } from "../../helpers/utils";

export const Footer = () => {

    return (
        <>
            <footer>
                <section>
                    <h1 className="by">Hecho con ❤️ por <a className='link' href="https://github.com/SandyAstorga" target="_blank">Sandy Astorga</a></h1>
                </section>
                <section className="f-menu">
                    <Link to={'/'} className="option-footer" onClick={handleUp}>Home</Link>
                    <Link to={'/about-me'} className="option-footer" onClick={handleUp}>Acerca de mi</Link>
                    <a className='link' href="https://portfolio-sandyastorga.vercel.app" target="_blank">
                        <p className="option-footer">Portfolio</p>
                    </a>
                </section>
            </footer>
        </>
    )
}

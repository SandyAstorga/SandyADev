import { useState, useEffect } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Icons } from "../../components/Icons/Icons";
import { Tags } from '../../components/Tags/Tags.jsx';
import logo from '../../assets/icon.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const [navClass, setNavClass] = useState('header1');
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset <= 400) {
                setNavClass('header1');
            } else {
                setNavClass('header2');
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 770) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuOption = (path) => {
        setMenuOpen(false);
        navigate(path);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleHomeClick = () => {
        navigate('/');
        window.location.reload();
    };

    return (
        <nav id="header" className={navClass}>
            <div className="container-header">
                <div className="logo">
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                        <img onClick={handleHomeClick} src={logo} alt="logo" />
                    </div>
                    <p>SandyADev</p>
                </div>
                <div className={`links-menu ${menuOpen ? 'open' : ''}`}>
                    <span className='option-header' onClick={handleHomeClick}>Home</span>
                    <span className='option-header' onClick={() => handleMenuOption('/courses ')}>Cursos</span>
                    <a className='option-header' href="https://porfolio-sandra-astorga.vercel.app/" target='_blank'>Portfolio</a>
                    <br />
                    <Tags closeMenu={closeMenu} />
                    <SearchBar className='menu-search-bar' closeMenu={closeMenu} />
                    <br />
                    <br />
                    <div className='back-icons'>
                        <a href='https://www.linkedin.com/in/sandraastorga13' target="_blank" rel="noopener noreferrer">
                            <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </a>
                        <a href='https://twitter.com/SandyAstorga13' target="_blank" rel="noopener noreferrer">
                            <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                        </a>
                        <a href='https://github.com/SandyAstorga' target="_blank" rel="noopener noreferrer">
                            <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                        </a>
                        <a href='https://ko-fi.com/sandyaweb' target="_blank" rel="noopener noreferrer">
                            <svg style={{ width: '21px' }} className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" baseProfile="basic"><path d="M29.26,23.96c0,0.91-0.4,1.72-1.03,2.28l-4.68,4.75l-4.69-4.75c-0.63-0.56-1.03-1.37-1.03-2.28 c0-1.69,1.38-3.07,3.08-3.07c0.9,0,1.72,0.39,2.28,1.02c0.14,0.15,0.26,0.31,0.36,0.48c0.09-0.17,0.22-0.33,0.36-0.48 c0.55-0.63,1.37-1.02,2.27-1.02C27.88,20.89,29.26,22.27,29.26,23.96z" /><path d="M38.48,22.86c0,2.03-1.53,3.71-3.51,3.93v-7c0-0.29-0.03-0.58-0.09-0.86C36.89,19.1,38.48,20.8,38.48,22.86z" /><path d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34.97,30.32v1.77c0,1.94-1.57,3.52-3.52,3.52 H16.52c-1.95,0-3.52-1.58-3.52-3.52V18.03c0-1.46,1.18-2.64,2.64-2.64h18.65c3.91,0,7.34,2.91,7.68,6.8 C42.35,26.46,39.11,30.08,34.97,30.32z" /><g><path fill="#fff" d="M26.18,20.89c-0.9,0-1.72,0.39-2.27,1.02c-0.14,0.15-0.27,0.31-0.36,0.48 c-0.1-0.17-0.22-0.33-0.36-0.48c-0.56-0.63-1.38-1.02-2.28-1.02c-1.7,0-3.08,1.38-3.08,3.07c0,0.91,0.4,1.72,1.03,2.28l4.69,4.75 l4.68-4.75c0.63-0.56,1.03-1.37,1.03-2.28C29.26,22.27,27.88,20.89,26.18,20.89z" /></g><path d="M29.26,23.96c0,0.91-0.4,1.72-1.03,2.28l-4.68,4.75l-4.69-4.75c-0.63-0.56-1.03-1.37-1.03-2.28c0-1.69,1.38-3.07,3.08-3.07 c0.9,0,1.72,0.39,2.28,1.02c0.14,0.15,0.26,0.31,0.36,0.48c0.09-0.17,0.22-0.33,0.36-0.48c0.55-0.63,1.37-1.02,2.27-1.02 C27.88,20.89,29.26,22.27,29.26,23.96z" /></svg>
                        </a>
                    </div>
                </div>
                <Icons />
                <div className="icono" id="open" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </div>
            </div>
        </nav>
    );
};
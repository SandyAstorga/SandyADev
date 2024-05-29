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
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer'}}>
                        <img onClick={handleHomeClick} src={logo} alt="logo" />
                    </div>
                    <p>SandyADev</p>
                </div>
                <div className={`links-menu ${menuOpen ? 'open' : ''}`}>
                    <span className='option-header' onClick={handleHomeClick}>Home</span>
                    <span className='option-header' onClick={() => handleMenuOption('/about-me')}>Acerca de mi</span>
                    <a className='option-header' href="https://portfolio-sandyastorga.vercel.app" target='_blank'>Portfolio</a>
                    <br />
                    <Tags closeMenu={closeMenu}/>
                    <SearchBar className='menu-search-bar' closeMenu={closeMenu} />
                </div>
                <Icons />
                <div className="icono" id="open" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </div>
            </div>
        </nav>
    );
};
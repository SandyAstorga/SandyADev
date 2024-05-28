/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { Avatar } from 'primereact/avatar';
import { NavBar } from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import profile from '../../assets/sand.jpg';
import { Icons } from '../Icons/Icons';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchProvider } from '../../Contexts/SearchContext';

export const Header = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 770);
    const [start, setStart] = useState([]);

    const homeLink = "/";
    const aboutMeLink = "/about-me";

    useEffect(() => {
        const handleResize = () => {
            const smallScreen = window.innerWidth < 770;
            setIsSmallScreen(smallScreen);
            updateMenuItems(smallScreen);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const updateMenuItems = (smallScreen) => {
        if (smallScreen) {
            setStart([
                { label: "Home", url: homeLink },
                { label: "Acerca de mi", url: aboutMeLink },
                { label: 'Portfolio', command: () => window.open('https://portfolio-sandyastorga.vercel.app/', '_blank', 'noopener,noreferrer') },
                { separator: true },
                {label: <SearchProvider><SearchBar /></SearchProvider>},
                { separator: true }
            ]);
        } else {
            setStart([
                { label: "Home", url: homeLink },
                { label: "Acerca de mi", url: aboutMeLink },
                { label: 'Portfolio', command: () => window.open('https://portfolio-sandyastorga.vercel.app/', '_blank', 'noopener,noreferrer') },
            ]);
        }
    };

    const image = (
        <div className='container-logo-blog'>
            <Link to={homeLink}>
                <Avatar image={profile} shape="circle" className='avatar' />
            </Link>
            <span className='name'>SandyADev</span>
        </div>
    );

    const end = (
        <Icons/>
    );

    return (
        <>
            {/* <MegaMenu model={start} start={image} end={end} orientation="horizontal"
                breakpoint="770px" />
            <NavBar /> */}
            {isSmallScreen ? (
                <MegaMenu model={start} start={image} end={end} orientation="horizontal" breakpoint="770px" />
            ) : (
                <MegaMenu model={start} start={image} end={end} orientation="horizontal" />
            )}
            <NavBar />
        </>
    )
}

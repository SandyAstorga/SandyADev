import PropTypes from 'prop-types';
import { useState } from "react";
import { Paginator } from 'primereact/paginator';
import { Link } from 'react-router-dom';
import { Card } from '../CardsArticles/Card.jsx';
import { handleUp } from "../../helpers/utils.js";

export const PaginatorCards = ({ allData }) => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const startIndex = first;
    const endIndex = first + rows;
    const displayedData = allData.slice(startIndex, endIndex);

    return (
        <div className="card">

            <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '.7rem', marginTop: '1rem'}}>
                <h1 style={{background: 'black', color: '#d2649a', padding: '.7rem 1rem', borderRadius: '1rem', letterSpacing: '.2rem'}}>ARTÍCULOS DE INTERES</h1>
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={allData.length}
                    onPageChange={onPageChange}
                    template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }}
                />
            </section>

            <section className='posts'>
                {displayedData.map(card => (
                    <Link key={card.id} to={`/post/${card.id}`} className='option' onClick={handleUp}>
                        <Card 
                            key={card.id}
                            category={card.category}
                            subCategory={card.subCategory}
                            title={card.title}
                            date={card.date}
                            image={card.image}
                        />
                    </Link>
                ))}
            </section>
        </div>
    );
}

PaginatorCards.propTypes = {
    allData: PropTypes.array.isRequired,
};

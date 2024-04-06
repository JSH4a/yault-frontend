import React from 'react';
import Card from './Card';

const CardList = ({ data, currentPage, getAllCards }) => {
    return (
        <main className='main'>
            {data?.content?.length === 0 && <div>No Cards. Please add a new card</div>}

            <ul className='card__list'>
                {data?.content?.length > 0 && data.content.map(card => <Card card={card} />)}
            </ul>

            {data?.content?.length > 0 && data?.totalPages > 1 &&
                <div className='pagination'>
                    <a onClick={() => getAllCards(currentPage - 1)} className={0 === currentPage ? 'disabled' : ''}>&laquo;</a>

                    {data && [...Array(data.totalPages).keys()].map((page, index) =>
                        <a onClick={() => getAllCards(page)} className={currentPage === page ? 'active' : ''} key={page}>{page + 1}</a>)}


                    <a onClick={() => getAllCards(currentPage + 1)} className={data.totalPages === currentPage + 1 ? 'disabled' : ''}>&raquo;</a>
                </div>
            }

        </main>
    )
}

export default CardList
import React from 'react'

function Card() {
    return (
        <Link to={`/cards/${card.id}`} className="card__item">
                <div className="card__header">
                    <div className="card__image">
                        <img src={card.imageUrl} alt={card.name}  />
                    </div>
                    <div className="card__details">
                        <p className="card_name">{card.name.substring(0, 15)} </p>
                        <p className="card_title">{card.cardType}</p>
                    </div>
                </div>
                <div className="card__body">
                    <p><i className="bi bi-envelope"></i> {card.description.substring(0, 20)} </p>
                </div>
            </Link>
      )
}

export default Card
import React from 'react';
import './Card.css'

const Card = ({card, toggleStatus}) => {
    return (
        <div className={"card-wrapper " + card.status}>
            <div onClick={() => toggleStatus(card.id)} className="cat-card">
                <div className='cat-photo'/>
                <div className="cat-card-title">
                    {card.title}
                </div>
                <h3 className="cat-card-name">{card.name}</h3>
                <div className="cat-card-info">{card.info}</div>
                <div className="card-portion">
                    <b>{card.portion}</b> порций
                </div>
                {card.gift.map((item, index) => <div key={index} className="card-gift">{item}</div>)}
                <div className="card-weight">
                    <div className="card-weight-value">{card.weight}</div>
                    <div className="card-weight-kg">кг</div>
                </div>
                <div className="card-inner-wrapper" />
            </div>
                <div className="card-label buy-product">
                    <p>Чего сидишь? Порадуй котэ, <a className="product-link" href="#" onClick={() => toggleStatus(card.id)}>купи</a></p>
                </div>
                <div className="card-label product-is-over">{"Печалька, " + card.info + " закончился."}</div>
                <div className="card-label selected-product">{card.selectedText}</div>
        </div>
    );
};

export default Card;
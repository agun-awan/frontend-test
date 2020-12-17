import React from 'react';

export const CardProduct = ({ onClick, lists }) => {
    return(
        lists.map(item => {
            return (
                <div className="flex-full" key={item.uuid}>
                    <div className="card">
                        <img className="img-card" src={item.image} alt="card" />
                        <div className="content">
                            <div className="info-badge">
                                <div>
                                    <button className="btn btn-sold">Dijual</button>
                                    <button className="btn btn-info-nego">Nego</button>
                                </div>
                                <img src={item.wishlist} alt="love"/>
                            </div>
                            <div className="info-price">
                                <h3>{item.price}</h3>
                                <p>{item.price_per_month}</p>
                            </div>
                            <div className="info-facility">
                                <div className="flex-row">
                                    { item.facility.map((fc, index) => (
                                        <div className="flex-col pr-0" key={index}>
                                            <h5>
                                                <img src={fc.icon} alt={fc.title} /> {fc.title}
                                            </h5>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="btn btn-block btn-detail" onClick={onClick}>Lihat Detail</button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default CardProduct;
import React from 'react'

export const Modal = ({ show, onClick, lists, showMap }) => {
    return(
        lists.map(item => (
            <div className="modal-panel"
                 style={{
                     transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                     opacity: show ? '1' : '0',
                 }}
                 key={item.uuid}
            >
                <div className="modal-content">
                    <div className="modal-body">
                        { showMap ? (
                            <div>
                                <img className="img-card" src={item.map} alt="card" />
                                <div className="marker-point">
                                    <img src={item.marker} alt="mark"/>
                                </div>
                                <div className="content">
                                    <div className="info-address">
                                        <h2>{item.address}</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque deleniti enim laborum porro veniam? Accusamus ad blanditiis cupiditate magni tempore. Dignissimos enim eum magnam non odit perspiciatis saepe temporibus.</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
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
                                    <div className="info-address">
                                        <h2>{item.title}</h2>
                                        <p>{item.address}</p>
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
                                </div>
                            </div>
                        )}

                        <button className="btn btn-block btn-detail" onClick={onClick}>
                            { showMap ? 'Tutup' : 'Lihat Peta'}
                        </button>
                    </div>
                </div>
            </div>
        ))
    )
}
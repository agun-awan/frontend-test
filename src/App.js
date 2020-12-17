import React, { useState } from "react";
import { CardProduct } from "./components/CardProduct";
import Navigation from "./components/Navigation";
import { Modal } from "./components/Modal";
import Data from "./data";
import ArrowRight from "./image/icon/arrow.svg";
import ArrowLeft from "./image/icon/arrow left.svg";
import BgPattern from "./image/bg.png";

function App() {
    const [list] = useState(Data)
    const [show, setShow] = useState(false)
    const [showMap, setShowMap] = useState(false)
    const [x, setX] = useState(0)

    const closeModalHandler = () => {
        setShow(false)
        setShowMap(false)
    }
    const toggleModal = () => setShow(!false)
    const showMapToggle = () => {
        if(showMap){
            setShowMap(false)
        }else{
            setShowMap(!false)
        }
    }

    const goLeft = () => {
        x === 0 ? setX(-100 * (list.length - 1)) : setX(x + 100);
    }
    const goRight = () => {
        x === -100 * (list.length-1) ? setX(0) : setX(x - 100);
    }

    return (
        <div>
            { show ? <div className="back-drop" onClick={closeModalHandler}/> : null }
            <div className="container">
                <Navigation />

                <main>
                    <div className="flex-row main-content">
                        <div className="flex-left">
                            <div className="side-content">
                                <h1>Start Your Journey</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, assumenda autem beatae cum cupiditate dolorem doloribus facere ipsa labore laudantium, magni maxime nihil odio quibusdam quidem repellendus, reprehenderit tenetur voluptate?</p>
                            </div>
                        </div>
                        <div className="flex-right" style={{padding: '0 60px'}}>
                            <div className="carousel">
                                <div className="carousel-wrapper" style={{transform:`translateX(${x}%)`}}>
                                    <CardProduct onClick={ toggleModal } lists={list}/>
                                </div>
                            </div>

                            <div className="control-left" onClick={goLeft}>
                                <img src={ArrowLeft} alt="left"/>
                            </div>
                            <div className="control-right" onClick={goRight}>
                                <img src={ArrowRight} alt="right"/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <div className="graphic-pattern">
                <img src={BgPattern} alt="pattern"/>
            </div>

            <Modal show={show} onClick={showMapToggle} lists={list} showMap={showMap}/>
        </div>

    );
}

export default App;

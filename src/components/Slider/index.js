import React, { useState } from 'react';
import './index.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const data = [
    {
        image: "https://source.unsplash.com/pgUbpDLJh3E/800x600",
        info: 'Dog',
    },
    {
        image: "https://source.unsplash.com/-81lVsfM4gQ/800x600",
        info: 'Cat',
    },
    {
        image: "https://source.unsplash.com/adK3Vu70DEQ/800x600",
        info: 'Mouse',
    },
    {
        image: "https://source.unsplash.com/5WRBRUsTqPk/800x600",
        info: 'Parrot',
    },
    {
        image: "https://source.unsplash.com/KvHT4dltPEQ/800x600",
        info: 'Rabbit'
    }
];

const Slider = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const animateSlider = (activeSlideIndex, newIndex) => {
        const sliderElement = document.querySelectorAll('.slider-selection')
        const prevPos = activeSlideIndex + 1
        const currPos = newIndex + 1
        const options = {
            iterations: 1,
            duration: 400,
            fill: 'forwards',
            easing: 'cubic-bezier(.19, 1, .22, 1.04)',
        }
        const keyframes = [
            { transform: 'translateY(' + ((prevPos - 1) * 60) + 'px) scaleX(1)' },
            { transform: 'translateY(' + ((prevPos + currPos - 2) * 60 / 2) + 'px) scaleX(.95)' },
            { transform: 'translateY(' + ((currPos - 1) * 60) + 'px) scaleX(1)' }
        ]
        sliderElement && prevPos !== currPos && sliderElement.forEach(el => el.animate(keyframes, options))
    };

    const changeSlideTo = (slider, index) => {
        animateSlider(selectedIndex, index);
        setSelectedIndex(index);
        // slider.goTo(index)
    }

    return (
        <div className="slider-wrapper">
            <div className="slider-container">
                <div className="slider-column">
                    <div className="slider-selection"></div>
                    {
                        data.map((item, i) => <div
                            key={i}
                            className={`item-row${selectedIndex === i ? " selected" : ""}`}
                            onClick={() => changeSlideTo("", i)}
                        >
                            <p>{item.info}</p>
                        </div>)
                    }
                </div>
                <div className="image-column">
                    <Carousel
                        selectedItem={selectedIndex}
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        dynamicHeight={true}
                    >{
                        data.map((item, i) => <div key={i} className="img-wrapper">
                            <img className="img" src={item.image} alt={item.info} />
                        </div>)
                    }</Carousel>
                </div>
            </div>
        </div>
    );
};

export default Slider;
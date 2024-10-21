import React, { useEffect } from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img11 from '../../assets/img11.jpg'
import img12 from '../../assets/img12.jpg'
import img13 from '../../assets/img13.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Kedarnath',
        location: 'Uttrakhand',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'Kedarnath is a revered town located in the Indian state of Uttarakhand, nestled in the Himalayas at an elevation of about 3,583 meters (11,755 feet). It is one of the Char Dham pilgrimage sites and is famous for the Kedarnath Temple, dedicated to Lord Shiva.'
    },
    {
        id: 11,
        imgSrc: img11,
        destTitle: 'Birla',
        location: 'Delhi',
        grade: 'CULTURAL RELAX',
        fees: '$590',
        description: 'Birla Mandir refers to several Hindu temples built by the Birla family, prominent industrialists in India. One of the most famous is the Birla Mandir in Delhi, dedicated to Lord Laxminarayan (a form of Lord Vishnu).'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Huayna picchu is a mountain in peri,rising over Machu Picchu,the so-called Lost City of Incas.This place is popular among tourists as the sunrise from the sun Gate is simply spectacular'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of delay,Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'According to the world Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia . This place is known for its lauxurious stays and adventourse activities. '
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'The epitome of delay,Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place.Happy exploring great food!'
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'Angkot wat reprasent the entire range of khmer art from the 9th to the 15th century.This templae is considered the heart and soul of Cambodia. This place is known from its luxurary stays .'
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'An immense mausoleum of white marbel, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the moment is breathtakingly beautiful.This templae is considered the heart and soul of Cambodia. This place is known from its luxurary stays.'
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'The epitome of delay,Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 12,
        imgSrc: img12,
        destTitle: 'Maldives',
        location: 'Northern',
        grade: 'CULTURAL RELAX',
        fees: '$580',
        description: 'The atoll comprises around 75 islands, with a few inhabited ones, such as Dharavandhoo and Maalhos. The resorts in the area offer luxurious accommodations and stunning views of the Indian Ocean.'
    },
    {
        id: 13,
        imgSrc: img13,
        destTitle: 'Hydrabad',
        location: 'Northern',
        grade: 'CULTURAL RELAX',
        fees: '$2540',
        description: 'Mountains are majestic natural formations that rise prominently above the surrounding landscape, often characterized by their steep slopes, rugged terrain, and varying elevations. They can be found in ranges or isolated peaks and are formed through geological processes like tectonic movements, volcanic activity, or erosion'
    },


]

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className='main container section'>

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destination
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle} </h4>
                                    <span className="content flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                        DETAILS <LuClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main
import React from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends React.Component{
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, voluptas."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, voluptas."
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, voluptas."
            },
            {
                icon: <FaBeer />,
                title: "strongest beer",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, voluptas."
            }
        ]
    }
    render(){
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
} 
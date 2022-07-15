import React from "react";
import { DataDepositions } from "./DataDepositions";
import './Depositions.css';


const Depositions = ({ }) => {
  return (
    <div>
    <div><p className="depositions-title">DEPOIMENTOS DE QUEM CONHECE</p></div>
    <div className="underline"></div>
    <div className='section-center'>
      {DataDepositions.map((depositionItem) => {
        const { id, title, img, desc } = depositionItem;
        return (
          <article key={id} className='depositions-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h2>{title}</h2>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
    </div>
  );
};


export default Depositions

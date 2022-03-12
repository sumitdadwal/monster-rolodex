import { Component } from "react";
import './card-list.styles.css';

import Card from "../cards/card.container";

const CardList = (props) => {
    return (
        <div className="card-list">
            {props.displayMonsters.map((monster)=>{
                return <Card monster={monster} />;
            })}
        </div>
    );
}


export default CardList
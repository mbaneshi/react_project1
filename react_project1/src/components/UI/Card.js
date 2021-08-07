import { React } from "react";
import classes from './Card.modules.css'

const Card = props => {
    return (<div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
        
    );
 }

export default Card;
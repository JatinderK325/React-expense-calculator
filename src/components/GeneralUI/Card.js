import React from 'react';
import './Card.css';

const Card = (props) => { 
    const classes = 'card ' + props.className; 
    return(
        // Card that is used in ExpenseItem, Expenses instead of div is our custom component. when we wrap JSX code in our custom component, we need to pass a content between opening and the closing tag of this div inside a Card component. 
        // we use components for not only reuseability but also to remove duplication in the code. 
        // here we have a example of special feature of compositon that is responsible for serving a container on any kind of our content by removing duplication of the code whether it is in our html code or css code etc. This {props.children} is the JSX code of that part where we have used Card component intead of div.
        <div className={classes}>{props.children}</div>
    );
}

export default Card;
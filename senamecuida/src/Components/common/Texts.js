import React from 'react';
import './estilos.css';

const Title = ({title}) => {
    return (
        <div className='title'>
            <h2>{title}</h2>
        </div>
     )
}

const SubTitle = ({title})=>{
    return(
    <div className='subTitle'>
        <h4>{title}</h4>
    </div>

    )
}
const Text = ({text})=>{
    return(
        <div className='text'>
            <p>{text}</p>
        </div>
    )
}

export {Title, SubTitle, Text}

import React from 'react';

export default function(props){
    const cardList = props.cardList;
    console.log(props, '00000');
    const cartStyle = {
        width: props.width ? props.width : '300px',
        height: props.height ? props.height : '300px'
    };
    const cards = cardList.map((item, index) => {
        return (
            <div className='card-item' >
                <div className='card-inner'>
                    <div className='nice' onClick={() => {props.cardChecked(item, index, 'nice')}}>
                    👍
                    </div>
                    <div className='bad' onClick={() => {props.cardChecked(item, index, 'bad')}}>
                    👎
                    </div>
                    <div>{item.e}</div>
                </div>
                
            </div>
        )
    })
    return (
        <div className='card-wrapper' style={cartStyle}>
            {cards}
        </div>
    )
}
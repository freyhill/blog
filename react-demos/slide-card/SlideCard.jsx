import React from 'react';

export default function(props){
    const dataList = props.imagesList;
    const cartStyle = {
        width: props.width ? props.width : '300px',
        height: props.height ? props.height : '300px'
    };
    const cards = dataList.map((item) => {
        return (
            <div className='card-item' >
                <img src={item.url} />
            </div>
        )
    })
    return (
        <div className='card-wrapper' style={cartStyle}>
            {cards}
        </div>
    )
}
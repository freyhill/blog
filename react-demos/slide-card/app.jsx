import React, { useState, useEffect} from 'react';
import axios from 'axios';
import _ from 'lodash';
import SlideCard from './SlideCard';
import {sleep} from '../common/utils'
export default function(){
    const [cardList, setCardList] = useState([]);
    // 处理卡片  
    const cardChecked = async (item, type) =>{
           // 删除卡片
        let cloneData = _.cloneDeep(cardList);
        cloneData.splice(index, 1);
        setCardList(cloneData);
    }
    
    useEffect(() => {
        async function getData() {
            const result = await axios.get('/react-demos/slide-card/data.json');
            setCardList(result.data)
        }
        getData();
    }, []);
    return (
        <div className='card-body'>
            <SlideCard cardList={cardList}/>
        </div>
    )
}
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './statics/index.scss'
import {docData} from './statics/data';
import * as docFormat from './statics/doc-format';
  console.log('docData', docData);


export default function() {
    const [flag, setFlag] = useState(0);
    const [doc, setDocData] = useState(docData)
    useEffect(() => {
        let docData = docFormat.formatImg(doc);
        docData = docFormat.formatGoods(doc);
        //setDocData(docData); // 这是一个问题
        $(window).on('scroll', () => {
            docFormat.goodsViewLog(docData);
        });
        setFlag(+ new Date());
       
    }, [])
    useEffect(() => {
        docFormat.lazyLoadImg();
        $(window).on('scroll', ()=>{
            docFormat.lazyLoadImg();
            setFlag(+ new Date());
        });
    },[flag])
	return (
		<div>
			<div dangerouslySetInnerHTML = {{ __html: doc.content }} />
		</div>
	)
}
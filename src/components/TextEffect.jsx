import React from 'react'
import { useEffect, useState } from 'react';

const TextEffect = ({label,ms,size}) => {
    const text = label;
    const [title,setTitle] = useState([]);
    const [hasRun, setHasRun] = useState(false);
    useEffect(() => {!hasRun?setHasRun(true):setTimeout(() => add(),ms?ms:200)},[hasRun,title]);
    const add = () => typeof(label)=="string"?parseInt(text.length+1)!==parseInt(title.length)?setTitle(prevVal => [...prevVal,text[title.length]]):<></>:<></>
  return (
    <h5 style={{fontSize:size?size:"1rem"}}>{title}{(parseInt(text.length+1)!==parseInt(title.length)?"_":".")}</h5>
  )
}

export default TextEffect
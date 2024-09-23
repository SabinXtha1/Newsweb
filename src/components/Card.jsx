import React, { useState } from 'react'
import './Card.css'
function Card({props}) {
    console.log(props)
   
  return (
    <>
    <div>
        <div className='grid'>

       {
           props.map((index,key)=>{
            if(!index.urlToImage){
                return null
            }else{

                return <>
               
            <div key={key} className='' >
                <div className='card'>

                <h1 className='title'>{index.title}</h1>
                <img src={index.urlToImage} alt={key}/>
                <div className='source'>
                    <p>{index.source.name}</p>
                    <p>{index.publishedAt}</p>
                </div>
               
                <p className='des' >{index.description}
                    <a href={index.url} target='__blank' ><button>VISIT NEWS</button></a>
                </p>
                </div>
               </div>

            </>
    }
        })
    }
    </div>
    </div>
    </>
)
}

export default Card
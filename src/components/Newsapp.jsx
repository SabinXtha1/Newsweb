import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import './News.css'
function Newsapp() {
    // const apiKey='af495843b01e4a4c9ebaa424023c46f8';
    const apiKey='5374fa1d77d747e694b85e963f2083c7' 
  const [search, setSearch] = useState('Nepal')
 const input = useRef()
 const [news, setNews] = useState([])

  const handdelInput=(e)=>{
   
     setSearch(e.target.value)
    }
   useEffect(()=>{
    getData()
   },[search])
    const getData=async()=>{
        const res=await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${apiKey}`)
        const data=await res.json()
        setNews(data.articles)
        console.log(data);
        input.current.value=""
    //    setSearch('')
        
    }
    const userIn=(inpu)=>{
        setSearch(inpu.target.value)
      
        
    }
    
    return (
        <>
            <div className='head'>
                <nav>
                    <ul>
                    <button  className='btn' onClick={userIn} value='WORLD'>
                        WORLD</button><button className='btn' onClick={userIn} value='Trending'>
                            Trending</button>
                    </ul>
                    <div>
                       <a href='https://www.instagram.com/xtha__sabin/' target='__blanlk'>

                        <h1 className='name'>
                           CodeXsabiN
                        </h1>
                       </a>
                    </div>
                    <div className='search'>
                        <div>

                        <input type="search" placeholder="Search" onChange={handdelInput} ref={input} />
                        <button onClick={getData} >Search</button>
                        </div>

                <div className="category">
                    <button onClick={userIn} value='Health'>
                        Health</button><button onClick={userIn} value='Sports'>
                            Sports</button><button onClick={userIn} value='Technologys'>Technologys</button><button onClick={userIn} value='Ai'>AI</button>
                </div>
                    </div>
                </nav>
                <div>
                
                </div>
            </div>
            {news? 
                    <Card props={news} />
               :null }
        </>
    )
}

export default Newsapp
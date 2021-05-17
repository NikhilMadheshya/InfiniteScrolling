import React, { useEffect, useMemo ,useState} from 'react'
import useFetch from './hook/useFetch';
import Posts from './components/posts/Posts'

function App() {
    
    const [pageNo,setPage]=useState(1);

    const [data,fetchData]=useFetch('https://jsonplaceholder.typicode.com/posts',pageNo,5);

    useEffect(()=>{
        fetchData(pageNo);
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[pageNo])

    const optiMizePosts=useMemo(()=><Posts posts={data} />,[data]);

    const handleScroll=()=>{
         
        const {scrollTop,scrollHeight,clientHeight}=document.documentElement;
        if(scrollTop+clientHeight>=scrollHeight)
         {  
             setPage(pageNo+1);
            
         }

    }

    if(data.length<0)
    return <p>Loading...</p>


    return (
        <>
        {
            optiMizePosts
        }
        </>
    )
}

export default App

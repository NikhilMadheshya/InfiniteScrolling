import {useState} from 'react';


const useFetch=(URL,pageNo,limit)=>{

    const [data,setData]=useState([]);
 

    const fetchData=async (pageNo)=>{  
        const response=await fetch(URL+`?_limit=${limit}_page=${pageNo}`);
        const result=await response.json();
        setData([...data,...result]);
        
    }


    return [
        data,
        fetchData
    ]

}

export default useFetch;
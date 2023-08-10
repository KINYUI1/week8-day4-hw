
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


function Price() {
    const [stock,setStock] = useState(null);
    const {symbol} = useParams()

    const getData = async ()=>{
        try {
            const res = await fetch(`https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=5196c5f5c831802a5f588f39fd7e11b6`)
            const data = await res.json()
            setStock(data)
           
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{  
        getData()
    },[])
    console.log(stock);
    const result = stock ? <div><h2>Ticker Symbol: {stock[0].symbol}</h2> <h2>Current Market Price: {stock[0].price}</h2> <h2>volume Traded Today: {stock[0].volume}</h2> </div> : <h3>loading</h3>
    console.log(result);
    return ( <div>
        {result}
    </div> );
}

export default Price;
import { useEffect, useState } from "react"
import {getData} from "./StoreData"
function StoreCard(){

    let cost = []
    const [data, setData] = useState()
    const getNewData = async() => {
        const dados = await getData()
        setData(dados) 
        
        
        
    }

    

    useEffect(() => {
        getNewData()

    }, [])

    return (
        <div>
            <img alt="item-img"></img>
            <h1 onClick={() => {
               console.log(data.length)
            }}>WHEY GREGO BAR SABOR DULCE DE LECHE HAVANNA DISPLAY C/ 12 BARRAS DE 40 GR</h1>
            <div>
                <icone></icone>
                <icone></icone>
                <icone></icone>
                <icone></icone>
                <icone></icone>
            </div>
            <div>{cost}</div>
            <p>Descrição</p>
            <div>
                <button></button>
                <icone></icone>
            </div>
        </div>
    )
}

export default StoreCard
import { useEffect, useState } from "react"
import {getData} from "./StoreData"
import StoreCardItem from "./StoreCardItem"
function StoreCardLine(){

    const [data, setData] = useState([])
    const [cost, setCost] = useState([])
    const [rate, setRate] = useState([])
    const [image, setImage] = useState([])
    const [description, setDescription] = useState([])
    const [title, setTitle] = useState([])

    const getNewData = async() => {
        const dados = await getData()
        setData(dados) 
        
    }

    const getSpecificData = () => {
        if(data.length > 1){
            for(let i = 0; i < data.length;i++){
                setCost(oldCost => [...oldCost, data[i].cost])
                setTitle(oldTitle => [...oldTitle, data[i].title])
                setDescription(oldDescription => [...oldDescription, data[i].description])
                setRate(oldRate => [...oldRate, data[i].rate])
                setImage(oldImage => [...oldImage, data[i].image])
            }
        }
    }

    

    useEffect(() => {
        getNewData()
    }, [])

    useEffect(() => {
        getSpecificData()
    }, [data / 2])

    return (
        <div className="flex w-[95%] gap-4 m-auto justify-between">
            <StoreCardItem cost={cost[0]} description={description[0]} title={title[0]} image={image[0]}></StoreCardItem>
            <StoreCardItem cost={cost[1]} description={description[1]} title={title[1]} image={image[1]}></StoreCardItem>
            <StoreCardItem cost={cost[2]} description={description[2]} title={title[2]} image={image[2]}></StoreCardItem>
            <StoreCardItem cost={cost[3]} description={description[3]} title={title[3]} image={image[3 ]}></StoreCardItem>
        </div>
    )
}

export default StoreCardLine
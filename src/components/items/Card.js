function Card({image}){
    return(
        <div className={`rounded h-60 w-72 hover:cursor-pointer`}>
            <img src={image} alt="Filme" className="h-full rounded hover:scale-125 duration-500 w-full"></img>
        </div>
    )
}

export default Card
import StoreCardLine from "./StoreCardLine"

function StoreMostSell(){
    return (
        <div className="bg-gray-50 px-6 mx-4">
            <div className="text-center text-xs font-most pt-16 pb-4"><span className="bg-orange-100 rounded px-2 text-orange-500 py-1">VEJA O QUE NOSSOS CLIENTES ESTÃO COMPRANDO</span></div>
            <div className="flex items-center w-full mb-12">
                <div className="flex flex-col gap-[1px] w-[42%]">
                    <div className="border-b-2 w-full border-gray-300"></div>
                    <div className="border-t-2 w-full border-gray-300"></div>
                </div>
                <h1 className="w-[16%] text-center text-xl font-most font-semibold">MAIS VENDIDOS</h1>
                <div className="w-[42%] flex flex-col gap-[1px]">
                    <div className="border-b-2 w-full border-gray-300"></div>
                    <div className="border-t-2 w-full border-gray-300"></div>
                </div>
            </div>
            <StoreCardLine></StoreCardLine>
        </div>
    )
}

export default StoreMostSell
function TimesSlide(){
    return (
        <div className="m-auto bg-gray-200 mb-10 w-[80%] flex rounded h-[35rem] sm:h-[30rem] xl:h-[40rem] 2xl:h-[45rem] sm:justify-center">
            <div className="w-[60%] flex flex-col">
                <div className="h-[80%] p-4">
                    <h1 className="text-xl sm:text-2xl font-bold">Horarios de funcionamentos:</h1>
                    <p className="text-md sm:text-lg pt-4 font-bold font-serif">Segunda a sexta:</p>
                    <p className="text-xs sm:text-sm py-2">05:30 as 22:00</p>
                    <p className="text-md sm:text-lg font-bold font-serif">Sábados:</p>
                    <p className="text-xs sm:text-sm py-2">08:00 as 13:00</p>
                    <p className="text-md sm:text-lg font-bold font-serif">Domingos:</p>
                    <p className="text-xs sm:text-sm py-2">09:00 as 11:00</p>
                </div>
                <p className="h-[20%] font-serif flex items-end p-4 text-[10px]">Horários podem estar sujeitos a mudanças, dias de feriado e recessões devem ser consultados!!</p>
            </div>
            <div className="w-[40%] rounded sm:flex hidden bg-fundo1 bg-cover bg-center">.
            </div>
        </div>
    )
}

export default TimesSlide
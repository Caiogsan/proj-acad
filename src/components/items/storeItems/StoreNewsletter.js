function StoreNewsLetter(){
    return (
        <div className="bg-gray-50 py-20 mb-10 px-6 mx-4">
        <div className="text-center text-xs font-most mb-4">
          <span className="bg-orange-100 rounded px-2 text-orange-500 py-1">
            FIQUE POR DENTRO DE NOSSAS NOVIDADES E PROMOÇÕES 
          </span>
        </div>
        <div className="flex items-center w-full mb-3">
          <div className="flex flex-col gap-[1px] w-[42%]">
            <div className="border-b-2 w-full border-gray-300"></div>
            <div className="border-t-2 w-full border-gray-300"></div>
          </div>
          <h1 className="w-[16%] text-center text-xl font-most font-semibold">
            NEWSLETTER
          </h1>
          <div className="w-[42%] flex flex-col gap-[1px]">
            <div className="border-b-2 w-full border-gray-300"></div>
            <div className="border-t-2 w-full border-gray-300"></div>
          </div>
        </div>
        <h2 className="text-center font-most text-gray-500">Assine a NLife e receba conteúdos valiosos sobre nutrição, suplementação, estilo de vida e exercícios físicos</h2>
        <form className="flex mt-10 w-[30%] gap-2 m-auto flex-col">
            <label htmlFor="name" className="font-most text-gray-800 text-sm">Nome:</label>
            <input id="name" className="bg-gray-100 rounded border-[1px] h-9 p-1 border-gray-300 shadow-inner" type="text"></input>
            <label htmlFor="email" className="font-most text-gray-800 text-sm">Email:</label>
            <input id="email" className="bg-gray-100 rounded border-[1px] p-1 h-9 border-gray-300 shadow-inner" type="email"></input>
            <label htmlFor="options" className="font-most text-gray-800 text-sm">Qual seu interesse?</label>
            <select id="options" className="bg-gray-100 rounded border-[1px] p-1 h-9 border-gray-300 shadow-inner">
                <option checked disabled>Selecione</option>
                <option>Quero criar hábitos saudáveis</option>
                <option>Quero dicas de exercícios</option>
                <option>Quero saber mais sobre nutrição</option>
                <option>Quero receber receitas fit</option>
            </select>
            <div className="flex gap-2 my-2 items-center">
                <input id="info" type="checkbox"></input>
                <label htmlFor="info" className="text-sm">Eu concordo em receber informações do site.</label>
            </div>
            <a className="font-most mb-4 text-gray-800 text-xs underline" href="/">Política de Privacidade</a>
            <button className="bg-black text-white rounded-full h-10" type="submit">ENVIAR</button>
        </form>
        <p className="w-[38%] mt-6 text-gray-500 font-info m-auto">A NUPRATA se preocupa com a sua privacidade! Utilizamos seus dados apenas para enviar nossas novidades e promoções. Ao assinar nossa Newsletter, você concorda com a nossa Política de Privacidade.</p>
      </div>
    )
}

export default StoreNewsLetter
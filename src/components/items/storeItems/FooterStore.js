function FooterStore() {
  return (
    <div className="px-2 mb-12">
      <div className="flex items-center w-full mb-12">
        <div className="flex flex-col gap-[1px] w-full">
          <div className="border-b-2 w-full border-gray-300"></div>
          <div className="border-t-2 w-full border-gray-300"></div>
        </div>
        <div className=" flex flex-col gap-[1px] w-full">
          <div className="border-b-2 w-full border-gray-300"></div>
          <div className="border-t-2 w-full border-gray-300"></div>
        </div>
      </div>
      <div className="flex px-16 justify-between">
        <div>
            <h1 className="text-xl mb-4 font-bold font-info">Área do Cliente</h1>
            <ul className="flex flex-col gap-1">
                <li><a href="/">Minha Conta</a></li>
                <li><a href="/">Meus Pedidos</a></li>
                <li><a href="/">Minha Lista de Desejos</a></li>
                <li><a href="/">Minhas Lista de Espera</a></li>
            </ul>
        </div>
        <div>
            <h1 className="text-xl mb-4 font-bold font-info">Institucional</h1>
            <ul className="flex flex-col gap-1">
                <li><a href="/">Sobre Nós</a></li>
                <li><a href="/">Blog</a></li>
            </ul>
        </div>
        <div>
            <h1 className="text-xl mb-4 font-bold font-info">Área Legal</h1>
            <ul className="flex flex-col gap-1">
                <li><a href="/">Política de Privacidade</a></li>
                <li><a href="/">Política de Trocas e Devoluções</a></li>
            </ul>   
        </div>
        <div>
            <h1 className="text-xl mb-4 font-bold font-info">Precisa de Ajuda?</h1>
            <ul className="flex flex-col gap-1">
                <li><a href="/">WhatsApp (00) 99192-9999</a></li>
                <li><a href="/">Fale Conosco</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterStore;

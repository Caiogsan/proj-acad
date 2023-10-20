function StoreInfo({ titulo, subtitulo, icon, stylesIcon }) {
  return (
    <div className="flex font-info pl-2 py-3 items-center rounded-md border-2 shadow border-gray-200 bg-gray-100">
      <div className={`w-[11%] flex ${stylesIcon}`}>{icon}</div>
      <div className="flex flex-col w-[89%]">
        <p className="font-bold text-md">{titulo}</p>
        <p className="text-[12px] font-sans text-gray-600">{subtitulo}</p>
      </div>
    </div>
  );
}

export default StoreInfo;

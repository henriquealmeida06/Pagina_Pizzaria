
function CirculoBloco({icone, comida, style}){
    return(
        <div className="absolute  flex flex-col w-44 h-44 items-center justify-center">
        <div className="border-4 border-white border-opacity-80 rounded-full p-4 absolute bg-cursom-roxo hover:bg-yellow-500 z-20">
            <span className="text-5xl text-white">{icone}</span>
        </div>
        <p className="mt-40 font-roboto1 font-medium text-white text-2xl absolute z-30 hover:{}">{comida}</p>
        </div>
    )
}
export default CirculoBloco;
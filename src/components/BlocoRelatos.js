function BlocoRelatos({relato, nome, funcao}){
    return(
        <div>
        <div className="w-px360 h-64 bg-white shadow-xl text-center flex justify-center items-center p-6 rounded-xl ">
            <p className="text-grayRelatos font-roboto1">{relato}</p>


        </div>
        <div className="mt-14 ">
            <p className="font-medium text-lg text-center">{nome}</p>
            <p className="text-grayRelatos text-center text-base">{funcao}</p>
        </div>
        </div>
    )
}
export default BlocoRelatos;
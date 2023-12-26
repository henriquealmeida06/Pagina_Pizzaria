

function BlocoReserva({icone, titulo, texto}){
    return(
        <div className="transition duration-150 hover:shadow-xl p-6 h-px350 w-80 mb-20 flex flex-col justify-center items-center gap-6">
            <span className="text-5xl text-purple-700">{icone}</span>
            <p  className="font-medium text-xl tracking-wider">{titulo}</p>
            <p className="text-center text-grayRelatos font-normal">{texto}</p>
            

        </div>
    )
}
export default BlocoReserva;
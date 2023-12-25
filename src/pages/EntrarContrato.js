

function EntrarContato(){
    return(
        <div className="h-screen  overflow-hidden bg-gray-800 pb-40 flex justify-center ">
            <div className="bg-fixed bg-parallaxContato opacity-60 w-screen h-screen bg-cover">
                
            </div>
           
            <div className=" absolute w-96 ml-px630 mt-32">
                <p className='font-Asfalto text-6xl leading-tight text-white'>-30% em todas as pizzas e bebidas</p>
            </div>
            <div className="absolute ml-px630 mt-80 flex w-96 gap-2">
                <div className="p-5  mt-3 border-t-4 border-purple-600">

                </div>
                <p className='text-lg font-light text-white'>Prove algumas das melhores saladas da PizzaHouse!</p>
            </div>
            <div className='py-8 px-16 bg-yellow-300 absolute ml-px580 mt-px320 cursor-pointer hover:bg-green-400 hover:text-white'>
                <p className='font-black tracking-widest '>ENTRAR EM CONTATO</p>

            </div>

        </div>
    )
}
export default EntrarContato;
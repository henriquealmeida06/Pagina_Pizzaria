import imgHome from './../img/slide-2-1920x753.jpg'


function Home(){
    return(
        <div className='mt-6'>
            <div className='h-px535 bg-cover bg-no-repeat flex items-center z-0 overflow-hidden'>
            <img className='' src={imgHome}/>
            <div className='w-4/5  absolute flex flex-col justify-start items-start mt-14 ml-48 text-justify -tracking-wider'>
            <p className='text-9xl text-white font-Asfalto tracking-wider'>INGREDIENTES</p>
            <p className='text-9xl text-white font-Asfalto '>DE QUALIDADE</p>
            <div className=' flex flex-wrap w-80 mt-10'>
                <p className='font-light text-xl text-white flex'>Usamos apenas os melhores ingredientes para fazer pizzas exclusivas para nossos clientes.</p>
            </div>
            </div>
            </div>
            
        

        </div>
    )
}
export default Home;
import Imagem from './../img/logo-198x66.png';
function ComponentLogo(){
    return(
        
        <div className="p-4 w-px415 h-20 bg-white flex items-center justify-center fixed border-r-px15 border-custom-gray z-50 skew-x-12">
            
            <img className='' src={Imagem} alt='Logo da NavBar' title='Logo da Navbar'/>
            
            
        </div>
    )
}
export default ComponentLogo;
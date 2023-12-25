import CirculoBloco from './CirculoBloco';
function BlocoMenu({wallpaper, Logo, alimento}){
    return(
        <div className="w-px360 h-px360 bg-gray-800  flex justify-center items-center overflow-hidden cursor-pointer">
            
            <img className="opacity-60 scale-125 transition-transform duration-200 hover:scale-100" src={wallpaper}/>
            <CirculoBloco icone={Logo} comida={alimento}/>

        </div>
    )
}
export default BlocoMenu;
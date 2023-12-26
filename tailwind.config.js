/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#f5f5f5',
        'cursom-roxo':'#6046b6',
        'grayRelatos': '#777777',
        'grayFormulario':'#e1e1e1',
        'grayCabecalho':'#38393b',
        'grayEscuro':'#868789',
        'grayInput':'#565758',
        'grayFundo':'#585a5c',
      },
      fontSize:{
        'px58':'58px',
      },
      
      width:{
        'px415':'410px',
        'px600':'140vh',
        'px360':'360px',
        'px430':'430px',
        'px700':'210.4vh',
        'px500':'182vh',
        'vh200':'157.5vh'
      },
      height:{
        'px360':'310px',
        
      },
      borderWidth:{
        'px15':'13px',
      },
      height:{
        'px535':'535px',
        'px360':'360px',
        'px350':'350px',
      },
      fontFamily:{
        'roboto1':'Roboto',
        'Asfalto':'FernandoForero-Asfalto',
        'WebFont': 'fontawesome-webfont',
        'bigmug':'fl-bigmug-line',
        'lg':'lg',
        'Linearicons':'Linearicons',
        'materialdesignicons-webfont':'materialdesignicons-webfont',
      },
      margin:{
        'mb-30': '-30px',
        'px400':'650px',
        'px630':'620px',
        'px320':'420px',
        'px580':'575px',
      },
      zIndex: {
        'z1':'1',
      },
      backgroundImage:{
        'parallaxAmbiente':'url("../src/img/bg-3.jpg")',
        'parallaxContato':'url("../src/img/bg-4.jpg")'
      }
      
      
    },
  },
  plugins: [],
}


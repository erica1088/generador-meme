
//CaptutamosID



const body = document.querySelector("body");
const botonImg =document.getElementById("boton-img");

const botonText =document.getElementById("boton-texto");



const asideImg = document.getElementById("asideimagen");
const asideText = document.getElementById("asidetext");
const containerFiltros= document.getElementById("container-filtros");

const header= document.getElementById("myheader");
const titulo = document.getElementById("titulo-principal");
const asidePanel = document.getElementById("panel-aside");
const inputUrlImg=document.getElementById("inputurl");
// const seleccionFondo = document.getElementById("select-fondo");

const menuUrl= document.getElementById("menuUrl");
const imgUrl= document.getElementById("imgUrl");

const imagenMeme =document.getElementById("img-meme");
const divMeme= document.getElementById("meme");
const fondoInput= document.getElementById("input-fondo");
const fondoSpan = document.getElementById("fondo-span");

const selectorDeFondo = document.getElementById("select-fondo");
const fondoPrincipalMeme =document.getElementById("fondoprincipal");
const principal =document.getElementById("textos");
const main = document.getElementById("main");
const tituloPrincipal= document.getElementById("titulo-principal");
const contenedorBotones=document.getElementById("contenedor-botones");
const botonModoClaro=document.getElementById("btn-modolight");
const botonFaDark= document.getElementById("btn-mododark");
const botonFaLight=document.getElementById("btn-light");
const TextToggle= document.getElementById("text-toggle");
const $ =(selector) => document.querySelector(selector);


//DESCARGAR IMAGEN

const descargarImagen =() =>{
    domtoimage.toBlob(principal
    ).then(function (blob){
        saveAs(blob, 'meme.png')
    })
   }



   


   body.addEventListener("click", ()=>{
    botonModoClaro.style.display='click';
   botonModo.style.display= 'click';
   
   })




  botonImg.addEventListener("click",()=>{
      asideText.style.display="none";
      asideImg.style.display="block";
      asidePanel.style.display="flex";
      botonCierre.style.display="block";
      btnCierreText.style.display="none";
     
     
 });

 botonText.addEventListener("click",()=>{
     asideImg.style.display="none";
     asideText.style.display="block"; 
     asidePanel.style.display="flex";
     botonCierre.style.display="block";
     btnCierreText.style.display="block";
  
});

    const botonCierre=document.getElementById("boton-cierre");


    botonCierre.addEventListener("click", ()=>{
        botonCierre.style.display= "none";
       asidePanel.style.display="none";
       
       
  
      
       
      
       
     
        
    })


    const btnCierreText= document.getElementById("boton-cierretext");

    btnCierreText.addEventListener('click', ()=>{
        btnCierreText.style.display="none";
        asideText.style.display="none";
      
  
    })

  








const botonModo = document.getElementById("boton-modo");

 let cambioModo = "Modo Oscuro";
botonModo.addEventListener("click",()=>{ 

     if (cambioModo === "modo claro"){
    body.style.backgroundColor= "#5B2C6F";
    header.style.background= "#4A235A";
     titulo.style.color = "white";
    selectorDeFondo.style.background="#C39BD3";
    asideImg.style.background="#512E5F";
    asideText.style.background="#512E5F"
    botonModo.textContent=cambioModo;
    cambioModo="Modo Oscuro";

 }else if (cambioModo === "Modo Oscuro"){
     body.style.background= " #BFC9CA";
    document.body.style.color = "black";
    header.style.background= "#85929E";
     titulo.style.color = "white"
    asideImg.style.background= "#AAB7B8"
    asideText.style.background="#AAB7B8";
    selectorDeFondo.style.background= "white";

    botonModo.textContent=cambioModo;
    cambioModo="modo claro";

 }

 });

           
 


// IMAGEN URL



const btnCloseText =document.getElementById("btn-closetext");
const textEditor =document.getElementById("text-editor");
const inputUrl =document.getElementById("inputurl");

    imgUrl.addEventListener("change",  (event) =>{
   let urlImagen= event.target.value;

  imagenMeme.style.backgroundImage= `url("${urlImagen}")`;


});







//CAMBIO COLOR DE FONDO MEME






const inputColorTexto =document.getElementById("input-color-text");

const changeColor= ()=>{
    imagenMeme.style.backgroundColor=fondoInput.value;
    inputColorTexto.innerText= fondoInput.toUppercase();
}

   fondoInput.addEventListener('input', changeColor);




   const changeSelect = () =>{
    imagenMeme.style.backgroundBlendMode= selectorDeFondo.value;
   }
      selectorDeFondo.addEventListener('input', changeSelect);






//    ASIDETEXT


   //TEXTO SUPERIOR

   const txtSuperior= document.getElementById("txtsup");
   const txtInferior =document.getElementById("txtinf");
   const textoSuperior = document.getElementById("textsuperior");
   const textoInferior= document.getElementById("textinferior");
   const sinTextoSuperior =document.getElementById("sintexto-superior");
   const sinTextoInferior= document.getElementById("sintexto-inferior");

   txtSuperior.addEventListener("input", (event) => {
    let textInput = event.target.value;

    textoSuperior.innerText= textInput;

    
   });

   txtInferior.addEventListener("input", (event)=> {
    let textInput= event.target.value;

    textoInferior.innerText= textInput;



   });




   sinTextoSuperior.addEventListener("click" , () =>{

    textoSuperior.classList.toggle("oculto");

   })

   sinTextoInferior.addEventListener("click", () =>{
    textoInferior.classList.toggle("oculto");
   });


//    FUENTE tipo

    const opcionDefuente =document.getElementById("fonts");
    
       opcionDefuente.addEventListener('change', (event)=>{
        let fuenteSeleccionada = event.target.value;

        textoSuperior.style.fontFamily= fuenteSeleccionada;
        textoInferior.style.fontFamily= fuenteSeleccionada;
       

    });

    // Tamaño
        
       const tamanioFuente= document.getElementById("size-fuente");

       tamanioFuente.addEventListener(`input` , (event) =>{
        let tamanioFonts = event.target.value;

       textoSuperior.style.fontSize = `${tamanioFonts}px`;
       textoInferior.style.fontSize = `${tamanioFonts}px`;
       });



    //    ALINEACION DE TEXTO

    const alinearTextIzquierda= document.getElementById("align-left");
    const alinearTextCentro= document.getElementById("align-center");
    const alinearTextDerecha = document.getElementById("align-right");

    alinearTextIzquierda.addEventListener(`click`, (event) =>{

        textoSuperior.style.textAlign = `left`;
        textoInferior.style.textAlign=`left`;
    });

     alinearTextCentro.addEventListener(`click`, (event) =>{

        textoSuperior.style.textAlign = `center`;
        textoInferior.style.textAlign=`center`;
    });


     alinearTextDerecha.addEventListener(`click`, (event) =>{

        textoSuperior.style.textAlign = `right`;
        textoInferior.style.textAlign=`right`;
    });


    // COLOR

    const colorDeTexto= document.getElementById("input-color");

       colorDeTexto.addEventListener(`change`, ()=>{
        textoSuperior.style.backgroundColor= colorDeTexto.value;
        textoInferior.style.backgroundColor= colorDeTexto.value;

    });



    const colorTextoMeme= document.getElementById("input-color-texto");

        colorTextoMeme.addEventListener(`change`, ()=>{
        textoSuperior.style.color= colorTextoMeme.value;
        textoInferior.style.color= colorTextoMeme.value;

    });









    // FONDO TRANSPARENTE
 

    const fondoTransparente= document.getElementById("fdo-transparente-tilde");
    const editorContainer=document.getElementById("editor-container");
    const inputColorTransparente=document.getElementById("input-color");

    fondoTransparente.addEventListener(`click`,() =>{
        if(fondoTransparente.checked){
           textoSuperior.style.backgroundColor="transparent";
           textoInferior.style.backgroundColor="transparent";

        } else  {
          textoSuperior.style.backgroundColor=inputColorTransparente.value;
            textoInferior.style.backgroundColor= inputColorTransparente.value;

        }
    });



    //CONTORNO

    const contornoNone =document.getElementById("none");
    const contornoLight= document.getElementById("light");
    const contornoDark= document.getElementById("dark");

      contornoNone.addEventListener('click', (e) =>{
        e.preventDefault();


        textoSuperior.style.textShadow= 'none';
        textoInferior.style.textShadow= 'none';

    })
       contornoLight.addEventListener('click', (e) =>{

        e.preventDefault();
        textoSuperior.style.textShadow= '0 0 3.5px #999';
        textoInferior.style.textShadow= '0 0 3.5px #999';

    });
        contornoDark.addEventListener('click', (e) =>{
            e.preventDefault();
        textoSuperior.style.textShadow= '0 0 3.5px #000';
        textoInferior.style.textShadow= '0 0 3.5px #000';


    });



  



// ESPACIADO    

const espaciadoInput= document.getElementById("espaciado-input");


    espaciadoInput.addEventListener('input', (event)=>{
        let espaciadoElegido=event.target.value;

        textoSuperior.style.padding=`${espaciadoElegido}px`;
        textoInferior.style.padding=`${espaciadoElegido}px`;
    });


    //INTERLINEADO
    
     const interlineadoSelect =document.getElementById("interlineado");


    interlineadoSelect.addEventListener('change', (event)=>{
        let interlineadoElegido= event.target.value;

        textoSuperior.style.lineHeight= interlineadoElegido;
        textoInferior.style.lineHeight= interlineadoElegido;
    });

      






    //color de la img

    fondoInput.addEventListener('input', cambiandoColoresImg);

    function cambiandoColoresImg(){
        const fondoImagen = fondoInput.value;
        imagenMeme.style.backgroundColor= fondoImagen;
        fondoSpan.innerHTML = fondoImagen.toUpperCaser();


    }

 



      selectorDeFondo.addEventListener('change', ()=> changeFilter())
      const changeFilter=()=>{
        imagenMeme.style.mixBlendMode=selectorDeFondo.value
      }
    


    //filtros


          const botonReset =document.getElementById("button-reset");
         const fondoBrillo =document.getElementById("brightness-input");
          const fondoOpacidad =document.getElementById("opacity-input");
          const fondoContraste =document.getElementById("contrast-input");
          const fondoDesenfoque =document.getElementById("blur-input");
          const fondoEscalaDeGrises =document.getElementById("greyscale-input");
          const fondoSepia =document.getElementById("sepia-input");
          const fondoMatiz=document.getElementById("matiz-input");
          const fondoSaturado =document.getElementById("saturate-input");
          const fondoNegativo =document.getElementById("invert-input");


          const filtrosImg = (e) =>{
            imagenMeme.style.filter=
            `brigtness(${fondoBrillo.value})
            opacity(${fondoOpacidad.value})
            contrast(${fondoContraste.value}%)
            blur(${fondoDesenfoque.value}px)
            greyscale(${fondoEscalaDeGrises.value}%)
            sepia(${fondoSepia.value}%)
            matiz(${fondoMatiz.value}deg)
            saturate(${fondoSaturado.value}%)
            invert(${fondoNegativo.value})`
          };
         

          fondoBrillo.addEventListener('input', (e)=>filtrosImg(e))
          fondoOpacidad.addEventListener('input', (e)=>filtrosImg(e))
          fondoContraste.addEventListener('input', (e)=>filtrosImg(e))
          fondoDesenfoque.addEventListener('input', (e)=>filtrosImg(e))
          fondoEscalaDeGrises.addEventListener('input', (e)=>filtrosImg(e))
          fondoSepia.addEventListener('input', (e)=>filtrosImg(e))
          fondoMatiz.addEventListener('input', (e)=>filtrosImg(e))
          fondoSaturado.addEventListener('input', (e)=>filtrosImg(e))
          fondoNegativo.addEventListener('input', (e)=>filtrosImg(e))

          botonReset.addEventListener('click', ()=> reset())

          const reset =() =>{
            imagenMeme.style.backgroundImage=('')
            fondoPrincipalMeme.style.backgroundColor=('')
            textoSuperior.textContent=('Texto Superior')
            textoInferior.textContent=('Texto Inferior')
            fondoSpan.textContent=('#00000')
          }


    const botonDescarga=document.getElementById("boton-descarga");
    

 
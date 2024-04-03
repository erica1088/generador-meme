
//CaptutamosID
const botonImg =document.getElementById("boton-img");

const botonText =document.getElementById("boton-texto");


const asideImg = document.getElementById("asideimagen");
const asideText = document.getElementById("asidetext");
const header= document.getElementById("myheader");
const titulo = document.getElementById("titulo-principal");
const asidePanel = document.getElementById("panel-aside");

botonImg.addEventListener("click",()=>{
    asideText.style.display="none";
    asideImg.style.display="block";
});

botonText.addEventListener("click",()=>{
    asideImg.style.display="none";
    asideText.style.display="block";
});

const botonModo = document.getElementById("boton-modo");

let cambioModo = "Modo Oscuro";
botonModo.addEventListener("click",()=>{ 

    if (cambioModo === "modo claro"){
    document.body.style.background= "#BFC9CA";
    document.body.style.color = "#D7DBDD";
    header.style.background= "#85929E ";
    titulo.style.color = "white";
    asidePanel.style.background= "#AAB7B8";
    botonModo.textContent=cambioModo;
    cambioModo="Modo Oscuro";
}else if (cambioModo === "Modo Oscuro"){
    document.body.style.background= "#5B2C6F ";
    document.body.style.color = "black ";
    header.style.background= "#4A235A";
    titulo.style.color = "black"
    asidePanel.style.background= "#512E5F"
    botonModo.textContent=cambioModo;
    cambioModo="modo claro";

}

});



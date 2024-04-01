
//CaptutamosID
const botonImg =document.getElementById("boton-img");

const botonText =document.getElementById("boton-texto");

const asideImg = document.getElementById("asideimagen");
const asideText = document.getElementById("asidetext");
const header= document.getElementById("myheader")

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
    document.body.style.background= "grey";
    document.body.style.color = "white";
    header.style.background= "pink";
    botonModo.textContent=cambioModo;
    cambioModo="Modo Oscuro";
}else if (cambioModo === "Modo Oscuro"){
    document.body.style.background= "blue";
    document.body.style.color = "white";
    header.style.background= "green";
    botonModo.textContent=cambioModo;
    cambioModo="modo claro";

}

});


let factura = document.querySelector("#factura");
let cantidadPersonas = document.querySelector("#cantidad-personas");


let btnPorcentaje = document.querySelectorAll(".btn-porcentaje");
let btnCustom = document.querySelector("#custom");


let tipAmount = document.querySelector("#tip-amount");
let total = document.querySelector("#total");


cantidadPersonas.addEventListener('input', function() {
    const value = this.value;
  
    if (value == 0  ) {
        document.querySelector(".parrafo-rojo").textContent = "no puede ser cero";
        cantidadPersonas.classList.add("border-rojo")
    } else {
        document.querySelector(".parrafo-rojo").textContent = '';
        cantidadPersonas.classList.remove("border-rojo");
    }
  });

btnPorcentaje.forEach(boton => {
    boton.addEventListener('click', () => {
        btnPorcentaje.forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');
    });
});

btnPorcentaje.forEach(btn => {
    btn.addEventListener( "click",() => {

        if(btn.value === "5"){
            calcularPropina(0.05)
        }else if(btn.value === "10"){
            calcularPropina(0.10)
        }else if(btn.value === "15"){
            calcularPropina(0.15)
        }else if(btn.value === "25"){
            calcularPropina(0.25)
        }else if (btn.value === "50"){
            calcularPropina(0.50) 
        }
    })
});

function calcularPropina(porcentaje){
    let resultado = factura.value * porcentaje 
    let propinaPorPersona = (resultado / cantidadPersonas.value) 
    tipAmount.textContent= `$ ${propinaPorPersona.toFixed(2)}`
    total.textContent= `$ ${(factura.value / cantidadPersonas.value + propinaPorPersona).toFixed(2) }`
}

 btnCustom.addEventListener("click", function (){
    const value = this.value/100
    calcularPropina(value)
 })



const reset = document.querySelector("#reset")
    reset.addEventListener("click", ()=> {
        location.href = location.href;
 });
   
   








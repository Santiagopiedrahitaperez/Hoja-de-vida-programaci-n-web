let citas=JSON.parse(localStorage.getItem("citas"));
if(citas){
    localStorage.setItem("citas",JSON.stringify(citas));
}else{
    localStorage.setItem("citas",JSON.stringify([]));
}
function validar(){
    var form = document.form;
    if(form.paciente.value==0){
      alert("EL CAMPO NOMBRE DEL PACIENTE ESTA VACIO ");
      form.paciente.value="";
      form.paciente.focus();
      return false; 
    }
   
    if(form.acompanante.value==0){
      alert("EL CAMPO  NOMBRE ACOMPAÑANTE ESTA VACIO ");
      form.acompanante.value="";
      form.acompanante.focus();
      return false; 
    }
    if(form.fecha.value==0){
      alert("EL CAMPO FECHA ESTA VACIO ");
      form.fecha.value="";
      form.fecha.focus();
      return false; 
    }
   
    if(form.hora.value==0){
      alert("EL CAMPO HORA ESTA VACIO ");
      form.hora.value="";
      form.hora.focus();
      return false; 
    }
    if(form.sintomas.value==0){
        alert("EL CAMPO SINTOMAS ESTA VACIO ");
        form.sintomas.value="";
        form.sintomas.focus();
        return false; 
      }
    alert("Datos enviados con exito ");
    
  }
const visualizarCitas=()=>{
    let citasHTML='';
    let citas=JSON.parse(localStorage.getItem("citas"));
    citas.map(cita=>{
        citasHTML+=<div class="cita">
        <p>Paciente: <span>${cita.paciente}</span></p>
        <p>Acompanante: <span>${cita.acompanante}</span></p>
        <p>Fecha: <span>${cita.fecha}</span></p>
        <p>Hora: <span>${cita.hora}</span></p>
        <p>Sintomas: <span>${cita.sintomas}</span></p>
        
        <button
        class="button eliminar u-full-width"
        onclick="eliminarCita('{$cita.id}')">Eliminar cita
        </button>
        </div>
    });
    document.querySelector("#listadocitas").innerHTML=citasHTML;
}

const eliminarCita=(idCita)=>{
    let citas=JSON.parse(localStorage.getItem("citas"));
    const nuevasCitas=citas.filter(cita=>cita.id !== idCita);
    localStorage.setItem("citas",JSON.stringify(nuevasCitas));
    visualizarCitas();

}

const agregarcita=()=>{
    let id=uuid.v1();
//     console.log(id);

let paciente=document.querySelector("#paciente").value;
let acompanante=document.querySelector("#acompanante").value;
let fecha=document.querySelector("#fecha").value;
let hora=document.querySelector("#hora").value;
let sintomas=document.querySelector("#sintomas").value;

//   console.log(`Nombre paciente: ${paciente}`);

if(paciente.trim()===''||
acompanante.trim()===''||
fecha.trim()===''||
hora.trim()===''||
sintomas.trim()===''){
mostrarError("#msj-error","Falta llenar campos");
return;
}

let nuevasCitas={id,paciente,acompanante,fecha,hora,sintomas}
citas.push(nuevasCitas);
localStorage.setItem("citas",JSON.stringify(citas));
document.querySelector("#form").reset();
// visualizarCitas();



 }

const mostrarError=(elemento,mensaje)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML=<p class="alerta-error">${mensaje}</p>;
   setTimeout(()=>{divError.innerHTML='';},2000);
}
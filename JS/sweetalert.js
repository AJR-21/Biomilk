function comprar() {
    Swal.fire({
        icon: 'success',
        title:'Comprado',
        text:'La compra se ha realizado con normalidad, gracias por su preferencia',
        allowOutsideClick: false
    })

}

function registrar(){
    nombre = document.getElementById('name');
    email = document.getElementById('email');
    form = document.getElementById('form');
    if (nombre.value != null && email.value != null){
        alert('Los datos se han registrado correctamente')
    } 
    
}

form.addEventListener('submit', registrar)
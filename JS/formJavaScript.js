console.log("hola")
///////FORMULARIO//////
const $form = document.querySelector('#form')
const $buttonMail = document.querySelector('#btn-mail')
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    
   const form = new FormData(this)
  
   $buttonMail.setAttribute('href',`mailto:lrtaborda@gmail.com?subject= Nombre: ${form.get('name')}. Correo: ${form.get('email')}&body=${form.get('message')}`)
   $buttonMail.click()
}

const email = "marceloprni@gmail.com";

email = ''

console.log(email);
console.log('O seu e-mail é:' + email);
console.log(`O seu e-mail é: ${email}`)



document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('O botão foi clickado')




});

document.getElementById('form-login').addEventListener('mouseenter',  e => {

    console.log('O mouse está sobre o formulário.');



});


document.querySelector('#form-login').addEventListener('mouseleave', e=> {
    console.log('O mouse está fora do formulário');


});


document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

   let email = document.querySelector('#email').value;
   let password = document.querySelector('#password').value;

   console.log(email, password);
  
   let json = {
    email,
    pasword
    };
    
    if (!json.email){
        console.error("o campo e-mail deve ser preenchido!")
     } else if (!json.password) {


    console.error("o campo dever ser preenchido!")

     }  else {

        console.info("dados validados com sucesso!")
     }
      
});



// if (!json.email) { console.error("o campo email deve ser preenchido"!) } else if (!json.password) { console.error ("O campo password deve ser preenchido!");} //


const botaoDisparaContagem = document.querySelector('.btn-contagem');
let numero=10;

botaoDisparaContagem.addEventListener('click',()=>{
   for(let i = 10; i>=0; i--){
       console.log(i);
   }
});



const btn = document.getElementById('change-color')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
btn.addEventListener('click',(e)=>{
  body.classList.toggle('alt-color')
  
  if(body.className === 'alt-color'){
    h1.innerHTML = 'Dark Mode'
  }else{
    h1.innerHTML = 'Background Color Changer'
  }
})


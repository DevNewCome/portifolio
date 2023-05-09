const button = document.querySelector('.comun')
const botao = document.querySelector('.banner-button')
const root = document.querySelector(':root');
const body = document.querySelector('body')
const links = document.querySelectorAll('.links')


links.forEach(link=>{
    link.addEventListener('click', (e) => {
         e.stopPropagation();
    })
})


botao.addEventListener('click',(e)=>{
    e.preventDefault();
    let cores = ['blue', 'red', 'yellow', 'orange'];
    
    let nextColor = Math.floor(Math.random() * cores.length);
    let color = cores[nextColor];
    button.style.color = color;
})



document.getElementById("theme").addEventListener("click", function () {
const h1Nome = document.querySelector('.web');
const tituloSkills = document.querySelector('.titulo-skills')
const tituloSoft = document.querySelector('.titulo-soft');
const lis = document.querySelectorAll('li');
const sobreMimContainer = document.querySelector('.sobre-mim')
const textLeft = document.querySelector('.text-left')
const contentProjects = document.querySelector('.content-projects');
const projectDescription = document.querySelectorAll('.projects-description')
const tituloProjects = document.querySelectorAll('.projects-title');
const tituloQuemSou = document.querySelector('.titulo');


    body.classList.toggle('light');
        if(body.classList.contains('light')){
            h1Nome.style.color = '#232833';
            tituloQuemSou.style.color = '#DCDADE'
            tituloSkills.style.color = 'black';
            tituloSoft.style.color = 'black';
            for(let i = 0; i < lis.length; i++){
                lis[i].style.color = 'black';
            }
            sobreMimContainer.style.backgroundColor = '#232833'
            textLeft.style.color = '#DCDADE';
            contentProjects.style.backgroundColor = '#232833'
            for(let desc of projectDescription){
                desc.style.color = '#DCDADE'
            }
            for(let titulo of tituloProjects){
                titulo.style.color = '#DCDADE'
            }
            /*for (let li of lis) {
                li.style.color = 'black'; // define o estilo individualmente para cada <li>
            }*/
        }else{
            h1Nome.style.color = '#DCDADE'
            tituloSkills.style.color = '#DCDADE'
            tituloSoft.style.color = '#DCDADE'
            tituloQuemSou.style.color = '#232833'
            for(let i = 0; i < lis.length; i++){
                lis[i].style.color = '#DCDADE';
            }
          sobreMimContainer.style.backgroundColor = '#DCDADE'
          textLeft.style.color = '#232833'
          contentProjects.style.backgroundColor = '#DCDADE'
          for(let desc of projectDescription){
            desc.style.color = '#232833'
        }
        for(let titulo of tituloProjects){
            titulo.style.color = '#232833'
        }
        }
  })







const background = document.getElementById('a2')
const body = document.getElementById('body')
const startGame = document.createElement('div')
const a2 = document.createElement('a2')

      startGame.className = 'startGame'

      const startText = document.createElement('h1')
      startText.className = 'startText'
      startText.textContent = 'Welcome !'
      
      const buttonStart = document.createElement('button')
      buttonStart.className = 'button-start'
      buttonStart.textContent = 'Начать игру'

      body.appendChild(startGame)
      startGame.appendChild(startText)
      startGame.appendChild(buttonStart)

      buttonStart.addEventListener('click', function myScript () {

        startGame.style.display = 'none' 
        body.style.clipPath = 'inset(0px 240px 0% 250px round 0px)'
        background.style.backgroundPositionX = '-10500px '


const img = document.querySelector('img')

const button = document.getElementById('go')
const floor = document.getElementById('floor')

const rasengan = document. getElementById('rasengan')



button.addEventListener('click', function upUp(){

    img.classList.add('up')

 

    img.addEventListener('animationend', () => {
        img.classList.remove('up')
    })
    

    setTimeout(stop, 1000)
})

window.addEventListener ('click', () => {
    img.classList.add('up')

 

    img.addEventListener('animationend', () => {
        img.classList.remove('up')
    })
    

    setTimeout(stop, 1000)   
} )

document.addEventListener('keydown', (event)  => {
    if (event.code === 'Space' || event.key === ' ' ){
        button  .click( )   
    }
})

const shuriken = document.getElementById('shuriken')

function runShuriken () {

     shuriken.classList.add('shuriken1')
    
     
     shuriken.addEventListener('animationend', () => {
        shuriken.classList.remove('shuriken1')})
        shuriken.style.zIndex = '999999'
    

}

setInterval(runShuriken, 5000)

const tree = document.getElementById('tree3')
const tree2 = document.getElementById('tree4')
const tree3 = document.getElementById('tree2')
const tree4 = document.getElementById('tree5')

function runTree () {

    tree.classList.add('treeRun')

    tree.addEventListener('animationend', () => {
        tree.classList.remove('treeRun')
    })
}

setInterval(runTree, 2000)


function runTree2 () {

    tree2.classList.add('treeRun1')

    tree.addEventListener('animationend', () => {
        tree2.classList.remove('treeRun1')
    })
}

setInterval(runTree2, 1000)

function runTree3 () {

    tree3.classList.add('treeRun1')

    tree.addEventListener('animationend', () => {
        tree3.classList.remove('treeRun1')
    })
}

setInterval(runTree3, 500)








const naruto = document.getElementById('naruto')

naruto.style.transform =  'translate(0px)'
naruto.style.transition = 'transform 2s ease'

function checkCollision(naruto,shuriken) {
    let narutoRect = naruto.getBoundingClientRect()
    let shurikenRect = shuriken.getBoundingClientRect()

    return(
    narutoRect.right > shurikenRect.left &&
    narutoRect.left < shurikenRect.right &&
    narutoRect.bottom > shurikenRect.top &&
    narutoRect.top < shurikenRect.bottom )
}

function gameLoop () {
    if (checkCollision(naruto, shuriken)) {
       
        
    rasengan.style.opacity = '1'

    const explo = () => {
     rasengan.style.opacity = '0'}


     setTimeout (explo, 900)

     body.style.clipPath = 'none'

     naruto.classList.add ('gOver')
     tree.classList.add ('stopAnim')
     shuriken.classList.add ('stopAnim')

      const gameOver = document.createElement('div')
      gameOver.className = 'gameOver'
      
      const buttonRefresh = document.createElement('button')
      buttonRefresh.className = 'button-game-over'
      buttonRefresh.textContent = 'Начать заново'
      buttonRefresh.addEventListener('click', () => {
        window.location.reload()
      })


      const h1 = document.createElement('h1')
      h1.className = 'text-game-over'
      h1.textContent = 'GAME OVER'

      body.appendChild(gameOver)
      gameOver.appendChild(buttonRefresh)
      gameOver.appendChild(h1)
     

        
       
    } else {
        loop = requestAnimationFrame(gameLoop);
    }
}

let loop = requestAnimationFrame(gameLoop);


setTimeout (function newLocation() {
    background.style.backgroundImage = 'url(backgr.jpg)'
    shuriken.src = 'raven.gif'

    const sharingan = document.createElement('img')
    sharingan.className = 'sharingan'
    sharingan.src = 'sharin.gif'
    

    const rock = document.createElement ('img')
    rock.className = 'rock'
    rock.src = 'rock.webp'

    const itachi = document.createElement('img')
    itachi.className = 'itachi'
    itachi.src = 'itachi.gif'
    itachi.style.transform = 'rotateY(180deg)'

    body.appendChild(sharingan)
    body.appendChild(rock)
    body.appendChild(itachi)
   
    tree.remove()
    tree2.remove()
    tree3.remove()
    tree4.remove()
    setTimeout(()=>{
sharingan.remove()
    },1000)
    
    
    

    
    
}

,25000)

  
} )


    

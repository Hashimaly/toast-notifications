const  button = document.getElementById('button')
const  toasts = document.getElementById('toasts')

const messages = [
    'this is first message',
    'this is second message',
    'this is third messafe',
    'this is fourth messafe',

] 

const types = ['info', 'success','error']

button.addEventListener('click', () => createNotification()
)
function createNotification(message = null, type = null){
    const notifi = document.createElement('div')
    notifi.classList.add('toast')

    notifi.classList.add(type ? type : randomtype())
    
    notifi.innerText = message ? message : randmMessage()

    toasts.appendChild(notifi)

    setTimeout(()=>{
        notifi.remove()
    },3000)
}

 function randmMessage(){
    return messages[Math.floor(Math.random()* messages.length)]
}

function randomtype(){
    return types[Math.floor(Math.random()* types.length)]
}
const ross = document.createTextNode('Ross Geller: Parabéns, Dr. Geller! Você é uma enciclopédia viva de *Friends*, e nenhum detalhe escapou de você. Aposto que até Marcel está orgulhoso!')
const monica = document.createTextNode('Monica Geller: Você é organizado(a) e detalhista! Assim como Monica, você sabe muito sobre os amigos e seus momentos, mas sempre há um pouquinho mais para aprender.')
const joey = document.createTextNode('Joey Tribbiani:  Você pode não saber muito sobre *Friends*, mas seu charme é inegável! Talvez precise assistir a mais episódios, mas lembre-se: "How you doin’?"')
const rachel= document.createTextNode('Rachel Green: Você conhece bastante a série, assim como Rachel conhece o mundo da moda! Mas ainda pode melhorar – continue assistindo para brilhar como ela.')
let contador = 0
var pop = document.querySelector('.pop-up-unable')
document.querySelector('.conferir').addEventListener('click', (e) => {
    e.preventDefault();
    const tds = document.querySelectorAll('input[type=radio]:checked')
    tds.forEach(item =>{
        if(item.value == 'true'){
            contador++
        }
    })
    pop.classList.toggle('pop-up-active')
    if(contador <= 3 ){
       document.querySelector('.result').append(joey)
    }else if(contador >= 4 && contador <= 6){
        document.querySelector('.result').append(rachel)
    }else if(contador >= 6 && contador <= 9){
        document.querySelector('.result').append(monica)
    }else{
        document.querySelector('.result').append(ross)
    }
})
document.querySelector('.close-button').addEventListener('click', (e)=> {
    e.preventDefault;
    pop.classList.toggle('lala')
})
let contador = 0
document.querySelector('.conferir').addEventListener('click', (e) => {
    e.preventDefault();
    const tds = document.querySelectorAll('input[type=radio]:checked')
    tds.forEach(item =>{
        if(item.value == 'true'){
            contador++
        }
    })
    if(contador <= 3 ){
        alert('0-30% (0 a 3 acertos) – Joey Tribbiani:  Você pode não saber muito sobre *Friends*, mas seu charme é inegável! Talvez precise assistir a mais episódios, mas lembre-se: "How you doin’?"')
    }else if(contador >= 4 && contador <= 6){
        alert('40-60% (4 a 6 acertos) – Rachel Green: Você conhece bastante a série, assim como Rachel conhece o mundo da moda! Mas ainda pode melhorar – continue assistindo para brilhar como ela.')
    }else if(contador >= 6 && contador <= 9){
        alert('Monica Geller: Você é organizado(a) e detalhista! Assim como Monica, você sabe muito sobre os amigos e seus momentos, mas sempre há um pouquinho mais para aprender.')
    }else{
        alert('100% (10 acertos) – Ross Geller: Parabéns, Dr. Geller! Você é uma enciclopédia viva de *Friends*, e nenhum detalhe escapou de você. Aposto que até Marcel está orgulhoso!')
    }
})

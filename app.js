const form = document.querySelector('.quiz-info')
const button = document.querySelector('button')

const gabarito = ['D','C','B','D','A'] 

const totalDeAcertos = document.createElement('p')

const inserirTotalAcertoDOM = (fraseDeRetorno, textoDeRetorno, classe, localResposta) => {
    fraseDeRetorno.textContent = textoDeRetorno
    fraseDeRetorno.setAttribute('class', classe)
    localResposta.insertAdjacentElement('beforebegin', fraseDeRetorno)
}

form.addEventListener('submit', event => {
    event.preventDefault()      

    const respSelecionadas = [
        form.respQuest01.value,
        form.respQuest02.value,
        form.respQuest03.value,
        form.respQuest04.value,
        form.respQuest05.value
    ]

    let acertos = 0
    respSelecionadas.forEach((respSelecionada, index) => {
        if(respSelecionada === gabarito[index]) {
            acertos += 1            
        }
    })
    
    if(acertos === 0 ){
        inserirTotalAcertoDOM(totalDeAcertos, `Você não acertou nenhuma questão, continue tentando.`, 'alert alert-danger', button)
        return
    }
    inserirTotalAcertoDOM(totalDeAcertos, `Você acertou ${acertos} Questões!`,'alert alert-primary', button)    
})
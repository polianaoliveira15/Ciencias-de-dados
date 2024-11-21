const url = 'https://raw.githubusercontent.com/polianaoliveira15/Ciencias-de-dados/refs/heads/main/base-de-dados/trabalho-dados-gerais.json'

async function visualizarInformacoesGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasTrabalhano = (dados.total_pessoas_empregadas) / 1e9
    const pessoasNoMundo = (dados.total_pessoas_mundo) / 1e9
    const horas = parseInt (dados.tempo_medio_dia__trabalhando)
    const minutos = Math.round ((dados.tempo_medio_dia_trabalhando- horas) * 100)
    const porcentagemConectada = ((pessoasTrabalhando / total_pessoas_mundo) * 100).toFixed(2)

    const paragrafo = document.createElement ('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = ` Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente 
    <sapan>${pessoasConectadas} bilhões </span> estão conectadas em alguma rede social e passam em média <span>${horas}</span> horas e <span>${minutos}</span> conectadas.
    <br> Isso significa que aproximadamente ${porcentagemConectada}% de pessoas estão conectadas em alguma rede social.`
    const container = document.getElementById("graficos-container")
    container.appendChild(paragrafo)
}
    visualizarInformacoesGlobais()

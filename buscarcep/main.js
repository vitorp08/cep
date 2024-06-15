document.addEventListener('DOMContentLoaded', ()=>{
    const url = 'https://cep.awesomeapi.com.br/json/'
    const  form = document.querySelector('.form')
    const infos = document.querySelector('.informacoes')
    const mensagem = document.querySelector('.mensagem')


        
    form.addEventListener('submit', (e)=>{
        const cep = document.querySelector('.cep').value
        e.preventDefault()

        const buscarCep = async ()=>{
            const getData =  await fetch(url+cep)
            const res = await getData.json()
            console.log(res)

            const container = document.createElement('p')
            const ibge = document.createElement('p')
            const ddd = document.createElement('p')
            
            container.innerHTML =`${res.address_type}: ${res.address_name}, ${res.district}, ${res.city} - ${res.state} `
            ibge.innerHTML = `Código IBGE do municípo: ${res.city_ibge}`
            ddd.innerHTML = `DDD: ${res.ddd}`

            
            infos.appendChild(container)
            infos.appendChild(ibge)
            infos.appendChild(ddd)
            
        }
        
        
        buscarCep().then(()=>{
            mensagem.innerHTML = 'Buscar realizada com sucesso.'
            mensagem.classList.add('sucesso')
        }).catch(()=>{
            mensagem.innerHTML = 'Algo deu errado, por favor verifique o CEP inserido'
            mensagem.classList.add('erro')
        })
    })

})



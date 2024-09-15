function buscar_cep(){
    let section = document.getElementById('resultados-cep');
    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    console.log(campoPesquisa)
    if(campoPesquisa == ""){
        alert("Preencha o campo de pesquisa");
        return;
    }
    if(campoPesquisa.length < 8){
        alert("O CEP deve conter 8 caracteres");
        return;
    }
    let url = `https://viacep.com.br/ws/${campoPesquisa}/json/`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.cep);
        let resultado = `
            <div class="card">
                <h2>endereço encontrado</h2>
                <p>Estado: ${data.estado}- ${data.uf}</p>
                <p>Cidade: ${data.localidade} </p>
                <p>Bairro: ${data.bairro}</p>
                <p>Logradouro: ${data.logradouro}</p>
            </div>
        `;
        section.innerHTML = resultado;
    })
}
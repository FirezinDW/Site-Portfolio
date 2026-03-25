const form = document.getElementById("formcontato");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("Mensagem").value;

    const novaMensagem = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    try{
        const resposta = await fetch("http://localhost:3000/mensagem",
            {
            method:"POST", 
            headers: {
                "Content-Type": "aplication/json" 
            },
            body: JSON.stringify(novaMensagem)
            }
        );
        const dados = await resposta.text();

        alert(dados);
        form.reset();

    }catch(erro){
        alert(`Erro: ${erro}`);
    }

})
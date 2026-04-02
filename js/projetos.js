fetch('../data/projetos.json')
    .then(Response => Response.json())
    .then(data => {
        const ContainerProjetos = document.getElementById('ContainerProjetos');

        ContainerProjetos.forEach(Projetos => {
            const card = document.createElement("div");
            card.classList.add("card-curso"); 

            const nome = document.createElement(h2);
            nome.textContent = Projetos.nome;

            const descricao = document.createElement(p);
            descricao.textContent = Projetos.descricao;

            const tecnologias = document.createElement(p);
            tecnologias.textContent = "Tecnologias usadas: " + Projetos.tecnologias.join(", ");
            

            const QuantUx = document.createElement(a);
            QuantUx.href = Projetos.link;
            QuantUx.textContent = "Acessar Projeto";


            card.append(nome, descricao, tecnologias, QuantUx);
            ContainerProjetos.appendChild(card);});

            card.classList.add("card-Projetos");
    });

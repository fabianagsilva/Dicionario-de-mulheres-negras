function carregaDicionario() {

    var biografias = {

        bio01: {
            nome: "Angela Davis",
            imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
            descricao:
                "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente   história dos Estados Unidos.",
            citacao:
                "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar.",
        },

        bio02: {
            nome: "Carolina de Jesus",
            imagem: "https://i.postimg.cc/Fdc5VKMJ/carolina-de-jesus.png",
            descricao:
                "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",
            citacao:
                "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é.",
        },

        bio03: {
            nome: "Conceição Evaristo",
            imagem: "https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",
            descricao:
                "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
            citacao:
                "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos.",
        },

         bio04: {
            nome: "Gladys West",
            imagem: "https://i.postimg.cc/1RJ2db7j/Gladys-West.png",
            descricao:
                "Se hoje você não se perder mais para chegar em locais que você nunca foi, agradeça à programadora norte-americana Gladys West, mais conhecida como a “mãe” do GPS. No ensino médio, ela se empenhou nos estudos e se formou como primeira da classe, ganhando uma bolsa de estudos na Universidade da Virgínia, onde se graduou em matemática. A brilhante programadora também foi a segunda mulher negra a trabalhar na base naval de Dahlgren, por 42 anos, com localização espacial de satélites. Além disso, a mãe do GPS recebeu vários prêmios e foi nomeada diretora do projeto do primeiro satélite a fazer um mapeamento oceanico via radar..",
            citacao:
                "Sempre fazendo tudo de maneira correta, para me tornar um exemplo para as outras pessoas que eram subordinadas a mim, especialmente mulheres.” “Eu me esforcei muito e dei o meu melhor.",
        },
        
        bio05: {
            nome: "Lélia Gonzalez",
            imagem: "https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",
            descricao:
                "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira. Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
            citacao:
                "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora.",
        },

        bio06: {
            nome: "Marielle Franco",
            imagem: "https://i.postimg.cc/8fS8KSGX/marielle-franco.png",
            descricao:
                "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros",
            citacao:
                "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?",
        },

        bio07: {
            nome: "Oprah Winfrey",
            imagem: "https://i.postimg.cc/1Xg8Km6x/Oprah-Winfrey.png",
            descricao:
                "Oprah é apresentadora de televisão e empresária, além de ser uma das pessoas mais influentes do mundo. Ganhou múltiplos prêmios Emmy por seu programa de TV, que é o talk-show com maior audiência da história da televisão norte-americana..",
            citacao:
                "Eu tenho certeza que o que focamos é no que nos tornamos..",
        },
        bio08: {
            nome: "Rosa Parks",
            imagem: "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",
            descricao:
                "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",
            citacao:
                "Você nunca deve ter medo do que está fazendo quando está certo.",
        },

        bio09: {
            nome: "Wangari Muta Maathai",
            imagem: "https://i.postimg.cc/m25jYjcJ/Wangari-Muta-Maathai.jpg",
            descricao:
                "Ativista política do meio ambiente no Quênia. Fundou o movimento Cinturão Verde Pan-africano, iniciativa que plantou mais de 30 milhões de árvores. Por sua luta na conservação das florestas, se tornou a primeira africana a ganhar o prêmio Nobel da Paz, em 2004..",
            citacao:
                "são as pequenas coisas que os cidadãos fazem. Isso é o que fará a diferença. Minha coisinha é plantar árvores.",
        },
       
    };
    var content = document.getElementById("content");

    for (var bio in biografias) {
        content.innerHTML +=
            '<div class= "card">' +
            '<img src="' +
            biografias[bio].imagem +
            '"/>' +
            "<details>" +
            "<summary>" +
            biografias[bio].nome +
            "</summary>" +
            "<p>" +
            biografias[bio].descricao +
            "</p>" +
            "<blockquote><q>" +

            biografias[bio].citacao +

            "</q></blockquote>" +

            "</details></div>";

    }
}
carregaDicionario();
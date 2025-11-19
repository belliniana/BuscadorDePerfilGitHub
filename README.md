Projeto – Buscador de Perfis do GitHub

Este projeto foi desenvolvido para praticar consumo de APIs e manipulação dinâmica do DOM, criando uma ferramenta capaz de pesquisar e exibir informações completas de usuários do GitHub.

Sobre o Projeto

O objetivo principal é permitir que o usuário pesquise qualquer perfil do GitHub através de um campo de busca.
Ao realizar a pesquisa, o sistema faz uma requisição à API pública do GitHub e retorna dados como:

Foto de perfil

Nome e nome de usuário

Biografia

Quantidade de repositórios públicos

Número de seguidores e seguindo

Link direto para o perfil

O design utiliza uma identidade visual com tons escuros e detalhes em laranja, simulando um estilo neon. A interface também se adapta ao tamanho da tela, reorganizando os elementos para melhor visualização em dispositivos móveis.

Tecnologias e Conceitos Abordados

HTML5 Semântico

Uso adequado de <header>, <main>, <form> e contêineres estruturados.

Organização clara entre interface e conteúdo dinâmico.

CSS3

Layout responsivo com media queries.

Efeitos visuais usando sombras, bordas, animações e transições.

Estilização personalizada inspirada em tema neon.

JavaScript (ES6+)

Consumo da API pública do GitHub com fetch().

Uso de funções assíncronas (async/await) para tratamento das requisições.

Manipulação do DOM para exibir resultados, mensagens de erro e estado de carregamento.

Tratamento de erros caso o usuário não seja encontrado.

API do GitHub

Requisição ao endpoint https://api.github.com/users/{username}.

Leitura e exibição de dados retornados em JSON.

Como Executar

Baixe ou clone este repositório.

Abra o arquivo index.html em qualquer navegador moderno.

Digite um nome de usuário no campo de busca e veja o resultado ser carregado automaticamente.

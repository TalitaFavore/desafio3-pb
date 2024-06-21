![](https://pb-desafio3.s3.us-east-2.amazonaws.com/Thumbnail.jpg)
# Furniro
Projeto desenvolvido no Programa de Bolsas - Front-end + AWS da CompassUOL. É um site de e-commerce de móveis fictício, com as páginas de login, home, shop, singleProduct, cart, checkout, contact e error.

Para organizar as tarefas foi utilizado um [Trello.](https://trello.com/b/fuH28LbT/desafio3)

## Os requisitos obrigatórios:

- TypeScript para tipagem;

- Firebase, para lidar com a autenticação do usuário. A autenticação deve ser possível com: e-mail, Facebook e Google. A documentação linkada está detalhada e fornece todas as informações necessárias para aplicar esta funcionalidade;

- React Router para criação das rotas, sendo que é necessário proteger as rotas;

- Crie controles deslizantes para exibição dos móveis na sessão da Home, em formato de Carrossel. Recomendação de biblioteca: Splide. 

- Run Mocky para criar uma API para os produtos;

- A página de produtos gerais deve conter paginação como no Figma, o botão de 'Filter' deve abrir um pop-up com filtros funcionais;

- Ao clicar no card de um móvel, é necessário redirecionar o usuário para a rota específica que
contém suas informações detalhadas (Product Page);

- Na página de produto, o botão de 'Add To Cart' deve adicionar o produto no carrinho e o produto pode ser adicionado ou removido quantas vezes o usuário desejar;

- O carrinho deve ser criado com Redux;

- Na página de carrinho o usuário pode remover todos os produtos, independente da quantidade, ao clicar no ícone de lixeira;

- Ao clicar no botão de “Check Out”, o usuário PRECISA estar logado para fazer o redirecionamento para a página de Check Out, essa rota específica deve estar protegida;

- Os campos de formulário devem ser todos validados;

- Na página de Check Out, os dados de endereço devem vir da API e preencher todos os campos de endereço automaticamente, exceto o de complemento;

- A aplicação deve estar responsiva;

- Pode fazer o uso de biblioteca externa (estritamente styled-components ou Tailwind) para
estilização;

- Testes unitários com pelo menos 70% de cobertura;

- Adicione um README ao seu projeto, com instruções para inicializar e rodar sua aplicação;

- Pequenos commits e use Convencionais Commits para manter seu repositório organizado.

- ReactApp rodando em uma instância EC2 (uso geral) com porta aberta para acesso externo (VPC do EC2)

- Todas as imagens devem ser hospedadas em bucket do S3 (uso geral)

# Tecnologias
- React
- TypeScript
- Tailwind CSS
- Splide
- Firebase
- Json Server
- Redux
- API ViaCEP
- ZOD

# Instalação

Faça o clone do projeto através do terminal de sua IDE de preferência

- git clone https://github.com/TalitaFavore/desafio3-pb.git

Após instalar as dependências rode o json server

- json-server --watch db.json --port 4000

Após isso instale as dependências necessárias

- npm install

Rode o comando abaixo para abrir o projeto em sua máquina

- npm start


## Autores

- [Talita Favore](https://github.com/TalitaFavore)






<p align="center">
   <a target="_blank" href="https://matheusmunizera.github.io/starwars-api/">
    <img src="https://github.com/MatheusMunizera/swApp/blob/main/readme/swapplogo.gif"/>
  </a>
</p>

# 🌠  SwApp
Lovingly crafted [StarWars API](https://github.com/MatheusMunizera/starwars-api/) tools and resources in Death Star

<p align="center">
    <a target="_blank" href="https://anhembi-swapp.netlify.app/">  
        <img src="https://github.com/MatheusMunizera/swApp/blob/main/readme/all.gif" width="212" height="368"/>
    </a>
  </p>

## Content
- [Preview Page Setup](##Preview-Page-Setup)
- [Instalation](##Instalation)
- [Pages](##Pages)
    - [Home](###Home)
    - [Films & Series](###Films-&-Series)
    - [List](###List)
    - [Random](###Random)
    - [Info](###Info)
- [Links](##Links)
    -[Creators](##Creators) 


## Preview Page Setup
      
🔗 Access: https://anhembi-swapp.netlify.app/ and set to mobile mode.
  <p align="center">
    <a target="_blank" href="https://anhembi-swapp.netlify.app/">  
      <img src="https://github.com/MatheusMunizera/swApp/blob/main/readme/setup-mobile-chrome.gif" width="700" height="400"/>
    </a>
  </p>

## Instalation
 - 1- Install [NodeJS](https://nodejs.org/en/)
 - 2- Install [Ionic](https://ionicframework.com/docs/intro/cli)<br>
    `npm install -g @ionic/cli`
 - 3- Clone the repository
 - 4- On folder<br>
 `npm install`
 - 5- To run<br>
    `ionic server`
    
<br>


## Pages

  ### Home  
<p>
  <img align="right" alt="home" src="https://github.com/MatheusMunizera/swApp/blob/main/readme/home.gif" width="212" height="368" />
  <em>
    A home Page contém uma apresentação do aplicativo e de todo seu conteúdo. Do lado esquerdo do app
encontramos o menu com os acessos para as outras páginas e acesso para links extras relacionados a criação
do site, o conteúdo do site está dividido em slides e posters que realizando o redirecionamento para outros sites,
no conjunto de slides iniciais irá conter informações das páginas do app, exemplo filmes e séries. Já nos slides
seguintes encontramos notícias e informações de determinados assuntos como exemplo o slide do jogo
Battlefront que traz últimas notícias do jogo e um link que direciona para o site onde pode estar adquirindo o
jogo, também encontramos mais abaixo slides com links extras que direcionam para lojas, notícias e
curiosidades.
    </em>  
</p>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

   ### Films & Series 
  

<p>
  <img align="left" alt="film" src="https://github.com/MatheusMunizera/swApp/blob/main/readme/film.gif" width="212" height="368" />
  <img align="left" alt="serie" src="https://github.com/MatheusMunizera/swApp/blob/main/readme/serie.gif" width="212" height="368" />
  <em>
    As Páginas filmes e séries traz uma lista de filmes e séries pertencentes ao universo Star Wars, cada card
possui uma breve sinopse dos filmes/série e dois botões que direcionam para o trailer e para o site da Disney
plus para assistir o conteúdo, também possui um saiba mais no final da sinopse que leva para o site do IMD que
contêm toda a informação do filme, desde elenco quanto nota do filme de acordo com os críticos.
    </em>  
</p>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

   ### List
 

<p>
   <img align="right" alt="list" src="https://github.com/MatheusMunizera/swApp/blob/main/readme/list.gif" width="212" height="368" />
  <em>
   Essa pagina foi feita com o intuito de trazer mais informações ao usuário sobre o vasto
universo da saga star wars, mostrando e trazendo ao usuário mais informações sobre o incrível
mundo dessa maravilhosa saga. A página faz acesso na API feita pelo nosso amigo Matheus
Muniz, onde a tela de listagem faz uma série de requisições a api para buscar informações sobre
todos os personagens, veículos, planetas e espécies presentes na saga, trazendo uma listagem
completa de todos, e para ver todas as informações sobre o personagem, basta clicar no ícone de
informações ao lado do nome do personagem, que abrirá as informações do personagem na tela
de Informações, e ainda conta com um filtro para poder pesquisar por personagens específicos.
Até o momento, já foi implementado toda a parte de acesso a api, listagem e filtro, faltando
apenas abrir os dados do personagem na tela de informações.
    </em>  
</p>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

   ### Random
 

<p>
   <img align="left" alt="random" src="https://github.com/MatheusMunizera/swApp/blob/main/readme/random.gif" width="212" height="368" />
  <em>
  A princípio esta tela tem como objetivo gerar personagens, veículos, planetas ou até espécies de forma
aleatória.
Seu funcionamento age da seguinte forma: após o usuário selecionar o tipo de informação
(como representado na figura 3), é feito um cálculo para gerar um número e esse número é passado como ID do
que será retornado, então, por exemplo, seja gerado o número 2, será retornado o personagem com ID de
número 2.
As informações retornadas são rasas, composta apenas por uma breve descrição e uma imagem respectiva ao
personagem, mas caso o usuário deseje algo mais detalhado é possível ser direcionado a página do
personagem clicando no ícone sobre o card. Por fim, temos 3 botões: o primeiro com função de voltar ao último
personagem gerado; O segundo com intuito de alterar o tipo de informação gerada (personagem, veículo,
planeta ou espécie); E o terceiro, que gera um novo ID para ser apresentado
A implementação da tela random já é feita usando a API e seu principal objetivo está completo, restando apenas
abrir os demais dados do personagem na tela de informações
    </em>  
</p>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

   ### Info
  <img align="right" alt="info" src="https://github.com/MatheusMunizera/swApp/blob/main/readme/info.gif" width="212" height="368" />

<p>
  <em>
   A tela info tem como objetivo principal a distribuição de informações em larga escala, onde o usuário terá a
oportunidade de tirar suas dúvidas e descobrir curiosidades a fundo do universo cenográfico de Star Wars,
sabemos como a saga, que ja passou de seus 40 anos, ainda intriga muitos de seus fans, sejam novos
seguidores ou antigos entusiastas com sua complexidade
A tela info é dívida em 3 principais módulos, imagem do elemento (seja um personagem, planeta, veículos e
especies), um breve resumo com o nome do objeto selecionado através da API e por fim um módulo "SAIBA
MAIS”, onde serão apresentadas as informações mais detalhadas (Técnicas, Produção e Ideológicas).
Até o momento, já foi implementado toda a questão de design, restando somente o acesso a API.
    </em>  
</p>
  

## Links
[SwApp](https://anhembi-swapp.netlify.app)<br>
[Starwars-API](https:/github.com/MatheusMunizera/starwars-api)<br>

### Creators
[Daniel Baião](https://github.com/Tirss)<br>
[Henrique Mendes](https://github.com/HmbGow)<br>
[Lucas Herranz](https://github.com/lucashrz)<br>
[Matheus Muniz](https://github.com/MatheusMunizera)<br>
[Pedro Lisboa](https://github.com/Pedrohdiasl)




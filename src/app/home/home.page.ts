import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { SwAppService } from '../services/sw-app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;

  public internalPagesSlidesInfo = [
    {
      name: "Databank",
      router: "/list",
      description: "Acesse as informações dos seus personagens favoritos e descubra curiosidades, origem, detalhes técnicos e muito mais sobre esse incrível universo de Star Wars",
      image: "/assets/image/Home/Home/PageImage/databanks.jpeg"
    },
    {
      name:"Quizz",
      router:"/quizz",
      description:"Você é um verdadeiro fã de Star Wars? Clique aqui e teste seu conhecimento sobre o universo Star Wars",
      image: "/assets/image/Home/Home/PageImage/quizz.jpg"
    },
    {
      name: "Filmes",
      router: "/filmes",
      description:"Veja todos os filmes pertencentes ao universo de Star wars e descrubra curiosidades e infromações extras de cada filme.",
      image: "/assets/image/Home/Home/PageImage/films.jpg"
    },
    {
      name: "Random",
      router: "/random",
      description:"Esta em duvida no que deseja? Deixe que escolhemos para você! Qualquer personagem, veiculo, especie ou planeta do mundo de StarWars aleatoriamente em sua mão",
      image: "/assets/image/Home/Home/PageImage/random.png"
    },
    {
      name: "Series",
      router: "/series",
      description:"Veja todos os series pertencentes ao universo de Star wars e descrubra curiosidades e infromações extras de cada serie.",
      image: "/assets/image/Home/Home/PageImage/series.jpeg"
    }
  ]
 

  public gameSlidesInfo = 
  [
    {
      name:"Star Wars: Squadrons",
      router:"https://www.ea.com/pt-br/games/starwars/squadrons",
      logo: "/assets/image/Home/Home/LogoGame/sws-logo-light.svg",
      description:"Aperte o cinto, sinta a adrenalina das lutas espaciais multiplayer em primeira pessoa ao lado do seu esquadrão e decole em uma emocionante campanha individual de STAR WARS™.",
      image:"/assets/image/Home/Home/ImageGame/Star-Wars-Squadrons.jpg"
    },
    {
      name:"Star Wars: Jedi Fallen Order",
      router:"https://www.ea.com/pt-br/games/starwars/jedi-fallen-order",
      logo: "/assets/image/Home/Home/LogoGame/sws-logo-light.svg",
      description:"Como um dos últimos Jedi, você precisa fazer de tudo para sobreviver. Complete seu treinamento antes que os Inquisidores descubram seu plano de reerguer a Ordem Jedi.",
      image:"/assets/image/Home/Home/ImageGame/Star-Wars-Jedi-Fallen-Order.jpg"
    },
    {
      name:"Star Wars: Battlefront",
      router:"https://www.ea.com/pt-br/games/star-wars/star-wars-battlefront",
      logo: "/assets/image/Home/Home/LogoGame/star-wars-battlefront-mono-logo.png",
      description:"A Edição Ultimate de Star Wars™ Battlefront™ tem tudo o que os fãs precisam para viver as batalhas no universo de Star Wars™ que sempre imaginaram.",
      image:"/assets/image/Home/Home/ImageGame/star-wars-battlefront.jpg"
    },
    {
      name:"Star Wars: Battlefront 2",
      router:"https://www.ea.com/pt-br/games/starwars/battlefront/star-wars-battlefront-2",
      logo: "/assets/image/Home/Home/LogoGame/battlefront-2-mono-logo.png",
      description:"Jogue como (ou contra) os vilões mais temidos e os heróis mais amados de Star Wars de todas as três eras, incluindo Kylo Ren, Rey, Darth Maul, Yoda e muitos outros. Habilidades únicas e aprimoráveis garantem que os personagens clássicos levem seus poderes e personalidades ao campo de batalha.",
      image:"/assets/image/Home/Home/ImageGame/star-wars-battlefront-2.jpg"
    },
    {
      name:"Star Wars: Galaxy of Heroes ",
      router:"https://www.ea.com/pt-br/games/starwars/galaxy-of-heroes",
      logo: "/assets/image/Home/Home/LogoGame/star-wars-galaxy-of-heroes-mono-logo.png",
      description:"Torne-se o Mestre da Galáxia! Crie e personalize sua equipe usando personagens de todas as épocas, incluindo campeões do Mandalorian, Star Wars ™: The Rise of Skywalker e Star Wars ™: The Last Jedi ™",
      image:"/assets/image/Home/Home/ImageGame/star-wars-galaxy-of-heroes.jpg"
    }
  ]

  public extraSlidesInfo = 
  [
    {
      name:"News BadBatch",
      router: "https://olhardigital.com.br/2021/03/30/cinema-e-streaming/star-wars-the-bad-batch-ganha-trailer-e-data-de-estreia-no-disney/",
      image: "/assets/image/Home/Noticias/bad.jfif",
      description:"Star Wars The Bad Batch ganha trailer e data de estreia no Disney+"
    },
    {
      name:"News Lego",
      router: "https://olhardigital.com.br/2021/04/02/games-e-consoles/lego-star-wars-the-skywalker-saga-e-adiado-indefinidamente/",
      image: "/assets/image/Home/Noticias/lego.jpg",
      description:"Lego Star Wars The Skywalker Saga é adiado indefinidamente"
    },
    {
      name:"cronologia star wars",
      router: "https://www.oficinadanet.com.br/disney-plus/35879-disney-ordem-correta-para-assistir-os-filmes-star-wars",
      image: "/assets/image/Home/Noticias/ordem.jfif",
      description:"Star Wars Qual a ordem certa para assistir os filmes na Disney+?"
    },
    {
      name:"HQs",
      router: "https://loja.panini.com.br/panini/vitrines/comics-star-wars.aspx",
      image: "/assets/image/Home/Extras/republic.jpg",
      description:"Confira as HQ's do universo de Star Wars"
    },
    {
      name:"Fandom ",
      router: "https://starwars.fandom.com/pt/wiki/P%C3%A1gina_principal",
      image: "/assets/image/Home/Extras/fandom.jpg",
      description:"encontre, discuta e compartilhe conhecimentos sobre Star Wars"
    },
    {
      name:"Disney +",
      router: "https://www.disneyplus.com/pt-br/login",
      image: "/assets/image/Home/Extras/disney.jpg",
      description:"Venha assistir os filmes e séries pertencentes ao universo de Star Wars  "
    },
    {
      name:"Star Wars Celebration",
      router: "https://www.starwarscelebration.com/",
      image: "/assets/image/Home/Extras/celebration.webp",
      description:"Star Wars Celebration uma convenção de fãs afim de celebrar a franquia Star Wars."
    }


  ]
  public slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 700,
    spaceBetween:20,
    autoplay:true
   };

   public  slideOptsExtras = {
    initialSlide: 0,
    slidesPerView: 2,
    speed: 700,
    spaceBetween:20,
    autoplay:true
   };
  

  constructor(private activatedRoute: ActivatedRoute,private swService: SwAppService) { 
  
  
  }

  async ngAfterViewInit(){
   await this.swService.requestAll();
  }


  
  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id');
  }

 async openPage(url: string){
  await Browser.open({toolbarColor: "#ffc500", url: url })
  }

}

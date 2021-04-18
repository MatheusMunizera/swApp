import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {
  public results = [
    {
      name: 'Jedi Iniciado',
      img: 'https://static.wikia.nocookie.net/starwars/images/5/52/SorsBandeam.png',
      description: 'Enquanto são crianças, são conduzidas com base em seu potencial de poder, Anakin foi apresentado nessa fase quando Qui-Gon Jinn o encontrou no planeta Tatooine.'
    },
    {
      name: 'Padawan',
      img: 'https://static.wikia.nocookie.net/ptstarwars/images/b/bb/Padawan_Kenobi.png',
      description: 'Um Padawan “se forma” passando nas Provas Jedi, embora alguns Padawans sejam considerados aprovados quando passam por experiências difíceis.'
    },
    {
      name: 'Cavaleiro Jedi',
      img: 'https://consciencianerd.com/wp-content/uploads/2020/10/Cavaleiro-Jedi.jpg',
      description: 'Durante a história de Star Wars, vimos muitos padawns que cumpriram os desafios jedis e acenderam como cavaleiros.'
    },
    {
      name: 'Grão-Mestre',
      img: 'https://static.wikia.nocookie.net/ptstarwars/images/4/45/Yoda.jpg',
      description: 'Esta classificação final é solitária, mantida por aquele considerado o mais sábio dos Mestres Jedi. Yoda foi o Grande Mestre durante a era prequel.'
    }
  ]

  public questions = [{
    text: "O primeiro filme da saga foi lançado em 1978.",
    answers:
      ["Não, em 1977",
        "Sim"
      ]

  },
  {
    text: "O rival de Anakin Skywalker na corrida de pods era Watto.",
    answers:
      ["Não, o nome do rival de Anakin era Sebulba.",
        "Sim, Watto correu contra Anakin em Boonta Eve."
      ]

  },
  {
    text: "O número da cela onde Leia ficou presa na Estrela da Morte era 2167.",
    answers:
      ["Não, Luke salvou a princesa na cela 2187.",
        "Sim, foi aí que Luke Skywalker resgatou a princesa."
      ]

  },
  {
    text: "O planeta natal de Han Solo é Bespin.",
    answers:
      ["Não, Han Solo nasceu em Corellia, planeta conhecido por suas fábricas de naves.",
        "Sim, Han Solo nasceu em Bespin, o mesmo planeta onde Lando Calrissian administra uma usina de gás Tibanna no Episódio V."
      ]

  },
  {
    text: "Em seu duelo com Anakin, Obi-Wan corta todos os quatro membros de seu ex-pupilo",
    answers:
      ["Errado, Obi-Wan poupa um dos braços de Anakin.",
        "Correto, Obi-Wan deixa Anakin sem nenhum membro, sendo substituídos por próteses robóticas."
      ]

  },
  {
    text: "A grande revelação de Darth Vader para Luke Skywalker: Eu sou seu...",
    answers:
      ["Pai",
        "Filho"
      ]

  },
  {
    text: "Uma vez, Mestre Yoda, disse: ",
    answers:
      ["Você ainda tem muito para aprender",
        "Você é capaz, confia pai"
      ]

  },
  {
    text: "C3PO é fluente em mais de oito milhões de formas de comunicação.",
    answers:
      ["Não, C3PO compreende seis milhões de formas de comunicação.",
        "Sim, o dróide de protocolo é fluente em oito milhões de formas de comunicação, inclusive Sith."
      ]

  }
  ]

  public currentQuestion = 0;
  public selectedAnswer = null;

  private score = 0;

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  public nextQuestion() {
    this.currentQuestion++;
    this.calculateResult();
    this.selectedAnswer = null;

    this.showToast();

     
    
  }

  public async confirmReset() {
    const alert = await this.alertCtrl.create({
      header: 'Tem certeza?',
      message: 'O seu resultado será perdido para sempre!',
      buttons: [
        {
          text: 'Reiniciar',
          handler: () => this.reset()
        },
        'Cancelar'
      ]
    });
    alert.present();
  }

  private reset() {
    this.currentQuestion = 0;
    this.score = 0;
  }

  private calculateResult() {
    if (this.selectedAnswer==0){
      this.score++
    }
    if (this.score <=2){
      this.teste=0
    }if(this.score >2 && this.score <=4){
      this.teste=1
    }if (this.score >4 && this.score <=6){
      this.teste=2
    }if (this.score >6){
      this.teste=3
    }
}
public teste=0
public teste2=0
  private async showToast() {
    const toast = await this.toastCtrl.create({
      header: this.currentQuestion + ' de ' + this.questions.length + ' respondidas',
      duration: 500
    })
    toast.present()
  }
ngOnInit(){}

}
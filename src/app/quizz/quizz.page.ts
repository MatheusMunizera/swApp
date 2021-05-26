import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { UserModalComponent } from '../components/user-modal/user-modal.component';
import { SwAppService } from 'src/app/services/sw-app.service';

interface Rank {
  id: number;
  username: string;
  score: number;

}


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})

export class QuizzPage implements OnInit {
  public results = [
    {
      name: 'Jedi Iniciado',
      img: '/assets/image/Quizz/Jedi-Iniciado.png',
      description: 'Enquanto são crianças, são conduzidas com base em seu potencial de poder, Anakin foi apresentado nessa fase quando Qui-Gon Jinn o encontrou no planeta Tatooine.'
    },
    {
      name: 'Padawan',
      img: '/assets/image/Quizz/Padawan.png',
      description: 'Um Padawan “se forma” passando nas Provas Jedi, embora alguns Padawans sejam considerados aprovados quando passam por experiências difíceis.'
    },
    {
      name: 'Cavaleiro Jedi',
      img: '/assets/image/Quizz/Cavaleiro-Jedi.jpg',
      description: 'Durante a história de Star Wars, vimos muitos padawns que cumpriram os desafios jedis e acenderam como cavaleiros.'
    },
    {
      name: 'Grão-Mestre',
      img: '/assets/image/Quizz/Yoda.jpg',
      description: 'Esta classificação final é solitária, mantida por aquele considerado o mais sábio dos Mestres Jedi. Yoda foi o Grande Mestre durante a era prequel.'
    }
  ]

  public questions = [{
    text: "O primeiro filme da saga foi lançado em 1978?",
    answers:
      ["Não",
        "Sim"
      ]

  },
  {
    text: "O rival de Anakin Skywalker na corrida de pods era Watto?",
    answers:
      ["Mentira",
        "Verdade"
      ]

   },
  {
    text: "O número da cela onde Leia ficou presa na Estrela da Morte era 2167?",
    answers:
      ["Não, era 2187.",
        "Sim"
      ]

  },
  {
    text: "O planeta natal de Han Solo é Bespin?",
    answers:
      ["Não, é Corellia.",
        "Verdade"
      ]

  },
  {
    text: "Em seu duelo com Anakin, Obi-Wan corta todos os quatro membros de seu ex-pupilo?",
    answers:
      ["Errado",
        "Correto"
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
    text: "É verdade que: Uma vez, Mestre Yoda, disse: Você ainda tem muito para aprender ?",
    answers:
      ["Verdadeira",
        "Nunca disse"
      ]

  },
  {
    text: "C3PO é fluente em mais de oito milhões de formas de comunicação?",
    answers:
      ["Não",
        "Sim"
      ]
  }
  ]

  public currentQuestion = 0;
  public selectedAnswer = null;
  public maxQuestionsNumbers = this.questions.length;

  constructor(private toastCtrl: ToastController, 
    private alertCtrl: AlertController, 
    private modalController: ModalController,
    public swService: SwAppService){ 
      this.score = 0;
    }

  private score: number;

  public async openUserModal(){
    const modal = await this.modalController.create({
      component: UserModalComponent,
      componentProps:{
        username: ''
      }
    });
    modal.present(); 
  }


  public nextQuestion() {
    this.currentQuestion++;
    this.calculateResult();
    this.selectedAnswer = null;
    this.showToast();

     if (this.currentQuestion >= this.maxQuestionsNumbers){
    this.swService.atualRank.score = this.score
    this.swService.addToStorage(this.swService.atualRank)
     }
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
    this.openUserModal()
  }

 
  

  private calculateResult() {
    if (this.selectedAnswer==0){
      this.score++;
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



  
ngOnInit(){
  this.openUserModal()
}

}
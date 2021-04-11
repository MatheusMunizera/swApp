import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {
acertos =0
currentQuestion=0
public questions=[{
  title: "O primeiro filme da saga foi lançado em 1978.",
  answers:
      {
        correct: "Não, em 1977",
        wrong: "Sim"
      }
  
},
{
  title: "O rival de Anakin Skywalker na corrida de pods era Watto.",
  answers:
      {
        correct: "Não, o nome do rival de Anakin era Sebulba.",
        wrong: "Sim, Watto correu contra Anakin em Boonta Eve."
      }
  
},
{
  title: "O número da cela onde Leia ficou presa na Estrela da Morte era 2167.",
  answers:
      {
        correct: "Não, Luke salvou a princesa na cela 2187.",
        wrong: "Sim, foi aí que Luke Skywalker resgatou a princesa."
      }
  
},
{
  title: "O planeta natal de Han Solo é Bespin.",
  answers:
      {
        correct: "Não, Han Solo nasceu em Corellia, planeta conhecido por suas fábricas de naves.",
        wrong: "Sim, Han Solo nasceu em Bespin, o mesmo planeta onde Lando Calrissian administra uma usina de gás Tibanna no Episódio V."
      }
  
},
{
  title: "Em seu duelo com Anakin, Obi-Wan corta todos os quatro membros de seu ex-pupilo",
  answers:
      {
        correct: "Errado, Obi-Wan poupa um dos braços de Anakin.",
        wrong: "Correto, Obi-Wan deixa Anakin sem nenhum membro, sendo substituídos por próteses robóticas."
      }
  
},
{
  title: "C3PO é fluente em mais de oito milhões de formas de comunicação.",
  answers:
      {
        correct: "Não, C3PO compreende seis milhões de formas de comunicação.",
        wrong: "Sim, o dróide de protocolo é fluente em oito milhões de formas de comunicação, inclusive Sith."
      }
  
}
]
  constructor() { }

  ngOnInit() {
  }

}

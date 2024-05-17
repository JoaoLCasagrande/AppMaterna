/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz-livro-meu',
  templateUrl: './quiz-livro-meu.page.html',
  styleUrls: ['./quiz-livro-meu.page.scss'],
})
export class QuizLivroMeuPage implements OnInit {

  questions = [
    {
      question: 'Quais são as complicações que podem ocorrer durante a gestação?',
      options: ['Conforto e bem-estar','Pré-eclâmpsia e diabetes gestacional','Fertilidade aumentada'],
      answer: 'Pré-eclâmpsia e diabetes gestacional'
    },
    {
      question: 'Qual dos exercícios abaixo é recomendado para gestantes?',
      options: ['Levantamento de peso', 'Natação','Corrida de longa distância'],
      answer: 'Natação'
    },
    {
      question: 'Qual a importância de cuidar da saúde durante a gestação?',
      options: ['Não tem importância','Garantir o bem-estar da mãe e do bebê','Aumentar o risco de complicações'],
      answer: 'Garantir o bem-estar da mãe e do bebê'
    },
    {
      question: 'Qual é o objetivo da alimentação saudável durante a gestação?',
      options: ['Ganhar peso rapidamente', 'Garantir os nutrientes necessários para o bebê', 'Prevenir o parto prematuro'],
      answer: 'Garantir os nutrientes necessários para o bebê'
    },
    {
      question: 'Quais são os principais cuidados pré-natais?',
      options: ['Fazer exercícios intensos','Fazer exames periódicos','Ingerir alimentos não saudáveis'],
      answer: 'Fazer exames periódicos'
    },
    {
      question: 'Qual dos alimentos abaixo é considerado saudável durante a gestação?',
      options: ['Batata frita', 'Hamburguer', 'Frutas e verduras'],
      answer: 'Frutas e verduras'
    }
  ];

  currentQuestionIndex = 0;
  currentQuestion = this.questions[this.currentQuestionIndex];
  selectedAnswer: string | null;
  correctAnswers = 0;

  constructor(private navCtrl: NavController, private alertController: AlertController) {
    this.selectedAnswer = null;
  }

  ngOnInit() {
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  async checkAnswer() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    let alertMessage: string;
    let alertHeader: string;

    if (this.selectedAnswer === currentQuestion.answer) {
      this.correctAnswers++;
      alertHeader = 'Resposta Correta!';
      alertMessage = 'Parabéns, você acertou!';
    } else {
      alertHeader = 'Resposta Errada!';
      alertMessage = `A resposta correta é: ${currentQuestion.answer}`;
    }

    const alert = await this.alertController.create({
      header: alertHeader,
      message: alertMessage,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.currentQuestionIndex++;
          if (this.currentQuestionIndex < this.questions.length) {
            this.currentQuestion = this.questions[this.currentQuestionIndex];
            this.selectedAnswer = null;
          } else {
            this.showQuizResult();
          }
        }
      }]
    });

    await alert.present();
  }

  async showQuizResult() {
    const totalQuestions = this.questions.length;
    const resultMessage = `Você acertou ${this.correctAnswers} / ${totalQuestions}`;

    const alert = await this.alertController.create({
      header: 'Resultado',
      message: resultMessage,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateForward('fim-quiz');
        }
      }]
    });

    await alert.present();
  }
}

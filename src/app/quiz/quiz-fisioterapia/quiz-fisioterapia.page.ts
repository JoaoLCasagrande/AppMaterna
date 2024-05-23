/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz-fisioterapia',
  templateUrl: './quiz-fisioterapia.page.html',
  styleUrls: ['./quiz-fisioterapia.page.scss'],
})
export class QuizFisioterapiaPage implements OnInit {

  questions = [
    {
      question: 'Devemos fortalecer a região pélvica?',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'A marcha (forma como anda) da gestante é normal.​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Falso'
    },
    {
      question: 'Os seios aumentam de tamanho?',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'Na gestação não ocorre mudanças corporais.​​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Falso'
    },
    {
      question: 'Gestantes devem praticar exercícios físicos?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'Gestantes podem apresentar manchas escuras no rosto?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'A amamentação aumenta o vínculo entre mãe e bebê?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'Postura errada na gravidez trás prejuízo​​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'O corpo da mulher é deslocado para frente durante a gravidez??​​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'Na gestação a sobrecarga é o único fator que pode ocasionar dores lombares?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Falso'
    },
    {
      question: 'O assoalho pélvico é responsável por sustentar o bebê​?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'O assoalho pélvico sofre alterações durante a gravidez​?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'O assoalho pélvico é importante somente durante a gravidez​?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Falso'
    },
    {
      question: 'Não se deve realizar exercícios durante a gravidez​?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Falso'
    },
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
    let alertMessage;

    if (this.selectedAnswer === currentQuestion.answer) {
      this.correctAnswers++;
      alertMessage = 'Resposta Correta!';
    } else {
      alertMessage = 'Resposta Errada! A resposta correta é: ' + currentQuestion.answer;
    }

    let customMessage = '';

    switch (this.currentQuestionIndex) {
      case 0:
        customMessage = 'A região pélvica precisa de muito cuidado e atenção, seu enfraquecimento pode nos trazer alguns problemas como: incontinência urinária e problemas sexuais. ​';
        break;
      case 1:
        customMessage = 'A marcha da gestante é anserina. Conforme o peso gravídico, os passos ficam mais curtos e oscilantes.​';
        break;
      case 2:
        customMessage = ' A prolactina é o hormônio responsável pelo aumento das glândulas mamárias e produção de leite.​​';
        break;
      case 3:
        customMessage = 'Ocorrem mudanças hormonais, biomecânicas e anatômicas​';
        break;
      case 4:
        customMessage = '​A prática regular de exercícios físicos de intensidade leve á moderada pode ter ​efeitos benéficos para a saúde da mãe e do bebê. Porém, o exercício é indicado A PARTIR do 1 trimestre de gestação (4 mês). Procure sempre falar com seu médico. ​';
        break;
      case 5:
        customMessage = 'O melasma que é o surgimento de manchas escuras em tons de castanho claro  que surgem no rosto, mas podem aparecer no colo, pescoço e braços pode se iniciar no primeiro ou segundo trimestre de gestação.';
        break;
      case 6:
        customMessage = 'A amamentação cria um vínculo muito especial, aumentando a intimidade e a união entre mãe e bebê.​';
        break;
      case 7:
        customMessage = 'Causa dor nas costas e pode prejudicar o bebê.​';
        break;
      case 8:
        customMessage = 'O aumento do útero altera o centro de gravidade aumentando a curva lombar e cervical, alteração no eixo da bacia, afastamento dos ombros em relação ao corpo,';
        break;
      case 9:
        customMessage = 'As dores lombares podem ser causadas pelo aumento da curvatura lombar e fraqueza dos músculos na região abdominal.​';
        break;
      case 10:
        customMessage = 'O assoalho pélvico é responsável pela sustentação de órgãos localizados na região pélvica, assim como o útero.​';
        break;
      case 11:
        customMessage = 'A massa corporal materna e do útero gravido aumentam a pressão sobre os músculos do assoalho pélvico.​';
        break;
      case 12:
        customMessage = 'A mudanças que ocorrem durante a gravidez e o parto, possuem um efeito prejudicial na estrutura do assoalho pélvico, podendo causar disfunções como incontinência urinaria e fecal.​';
        break;
      case 13:
        customMessage = 'Exercícios de intensidade leve podem promover melhora na resistência e flexibilidade muscular, sem aumento no risco de lesões, complicações na gestação e ajuda a prevenir risco de diabetes gestacional.​';
        break;
      default:
        customMessage = 'Mensagem padrão para perguntas adicionais';
    }

    const alert = await this.alertController.create({
      header: alertMessage,
      message: customMessage,
      buttons: [{
        text: 'OK',
        handler: () => {
          // Próxima Questão
          this.currentQuestionIndex++;

          if (this.currentQuestionIndex < this.questions.length) {
            this.currentQuestion = this.questions[this.currentQuestionIndex];
            this.selectedAnswer = null; // Limpa a seleção de alternativa
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
          this.navCtrl.navigateForward('fim-quiz-fisioterapia');
        }
      }]
    });

    await alert.present();
  }
}

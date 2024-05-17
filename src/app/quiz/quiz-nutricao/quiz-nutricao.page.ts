/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz-nutricao',
  templateUrl: './quiz-nutricao.page.html',
  styleUrls: ['./quiz-nutricao.page.scss'],
})
export class QuizNutricaoPage implements OnInit {

  questions = [
    {
      question: 'Gestante tem que comer por dois?',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Falso'
    },
    {
      question: 'Gestantes devem evitar alguns adoçantes?',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'Se a gestante não realizar seus desejos alimentares, a criança nascerá com algum problema?',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Falso'
    },
    {
      question: 'O 1º trimestre é o mais crítico?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'Gestantes que tem azia terão bebês cabeludos?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Falso'
    },
    {
      question: 'Gestantes devem praticar exercícios físicos??​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'O formato da barriga indica o sexo do bebê?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Falso'
    },
    {
      question: 'Os bebês reconhecem a voz da mãe?​​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'Alguns nutrientes são essenciais para a gestação, tanto que o governo desde 2004 oferece a fortificação de alimentos. Seriam eles o ferro e o ácido fólico?​​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
    },
    {
      question: 'As plantas medicinais podem causar anormalidades e malformações, produzindo dano ao embrião ou feto, e até aborto durante a gravidez?​',
      options: ['Verdadeiro', 'Falso'],
      answer: 'Verdadeiro'
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
        customMessage = 'Durante a gestação, o aumento das necessidades de vitaminas e minerais é maior do que as energéticas. Por isso, comer em dobro não é indicado e, inclusive, pode resultar em complicações se houver um ganho de peso muito acima do recomendado.';
        break;
      case 1:
        customMessage = 'A sacarina e o ciclamato devem ser evitados durante a gestação devido a limitação de informações sobre o potencial carcinogênico, o uso na gestação e os efeitos sobre o feto. Assim, caso necessário fazer o uso, é preferível recorrer a outros tipos de adoçantes, como o aspartame ou estévia.';
        break;
      case 2:
        customMessage = 'O surgimento de desejos repentinos podem estar relacionados a carências nutricionais do bebê, que são transmitidas via placenta até o cérebro da mãe e processadas na forma de desejo por algum alimento.​';
        break;
      case 3:
        customMessage = 'Nesse período que ocorre a formação do saco vitelino, da vesícula vitelina e do embrião propriamente dito. Por isso, há uma maior sensibilidade a teratógenos (ex.: medicamentos, álcool, tabaco), que podem interferir e produzir danos no desenvolvimento adequado do bebê.​';
        break;
      case 4:
        customMessage = 'A azia manifestadas durante a gestação é resultante da compressão do estômago pelo útero, que se expande conforme o bebê se desenvolve, fazendo com que ocorra um refluxo do ácido gástrico.';
        break;
      case 5:
        customMessage = 'Desde que não haja nenhum fato de risco, exercícios de baixo impacto e supervisionados por um profissional especializado são recomendados do início ao fim da gestação.';
        break;
      case 6:
        customMessage = 'O formato da barriga da gestante não é influenciado pelo sexo do bebe, mas sim por fatores genéticos e anatômicos.​';
        break;
      case 7:
        customMessage = 'A partir do 2º trimestre gestacional, o bebê desenvolve quatro dos cinco sentidos, incluindo a audição. Assim, ele consegue associar ao período intrauterino tanto a voz da mãe quanto outros sons aos quais foi exposto de forma frequente. ';
        break;
      case 8:
        customMessage = 'As farinhas de trigo e de milho que consumimos no Brasil, são fortificadas com Ferro e Ácido fólico. O enriquecimento das farinhas existe para combater dois graves problemas de saúde pública brasileira: a anemia por deficiência de Ferro e a má formação do feto quando a mãe não consome Ácido fólico suficiente. O papel do Ácido fólico é auxiliar na formação do sistema nervoso do bebê. Mas é importante ter uma orientação nutricional para não exagerar no consumo!​';
        break;
      case 9:
        customMessage = 'Não há dados a respeito e segurança sobre o uso de plantas medicinais durante a gravidez. Dessa forma, a orientação é não utilizar qualquer medicamento, seja ele de origem vegetal ou não, sem o conhecimento prévio do seu médico, já que se pode observar na literatura, a capacidade das substâncias tóxicas causarem anormalidades e malformações no bebê, além do efeito abortivo, em algumas espécies de plantas. ';
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
          this.navCtrl.navigateForward('fim-quiz');
        }
      }]
    });

    await alert.present();
  }
}

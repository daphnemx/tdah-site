import { Component, OnInit } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  state,
  keyframes,
} from '@angular/animations';
import { slideInRightList } from '../animations-test/slide-right.animation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-adulto',
  templateUrl: './test-adulto.component.html',
  styleUrls: ['./test-adulto.component.css', '../tests.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({ opacity: 0, transform: 'translate(10%, 5%)' })),
      state('visible', style({ opacity: 1, transform: 'translate(0)' })),
      transition('hidden => visible', [
        animate(
          '600ms cubic-bezier(.25,.8,.25,1)',
          keyframes([
            style({ opacity: 0, transform: 'translate(10%, 5%)', offset: 0 }),
            style({ opacity: 0.45, transform: 'translate(0)', offset: 0.7 }),
            style({ transform: 'translateX(-20px)', offset: 0.9 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ])
        ),
      ]),
      transition('visible => hidden', [
        animate(
          '500ms cubic-bezier(.25,.8,.25,1)',
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 0, transform: 'translateX(-10%)', offset: 0.7 }),
          ])
        ),
      ]),
    ]),
    [
      slideInRightList,
      trigger('slideInRight', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translate(10%, 5%)' }),
          animate(
            '100ms ease-in',
            style({ opacity: 1, transform: 'translate(0)' })
          ),
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate(
            '100ms ease-out',
            style({ opacity: 0, transform: 'translateX(100%)' })
          ),
        ]),
      ]),
    ],
  ],
})
export class TestAdultoComponent implements OnInit {
  questionsInatencion = [
    {
      text: '¿Tiene dificultad para mantener la atención en tareas o actividades laborales o de estudio?',
      value: null,
    },
    {
      text: '¿Parece no escuchar cuando se le habla directamente?',
      value: null,
    },
    {
      text: '¿Comete errores por descuido en el trabajo, en la escuela o en otras actividades?',
      value: null,
    },
    {
      text: '¿Evita o le disgustan las actividades que requieren un esfuerzo mental sostenido (por ejemplo, tareas complejas, lectura larga)?',
      value: null,
    },
    {
      text: '¿Tiene dificultad para organizar tareas y responsabilidades diarias?',
      value: null,
    },
    {
      text: '¿Suele perder objetos necesarios para el trabajo, la escuela o actividades recreativas (por ejemplo, llaves, teléfono, documentos)?',
      value: null,
    },
    {
      text: '¿No completa instrucciones y falla en terminar tareas o responsabilidades?',
      value: null,
    },
    {
      text: '¿Se distrae fácilmente por estímulos externos?',
      value: null,
    },
  ];

  questionsHiperactividad = [
    {
      text: '¿Se encuentra a menudo inquieto, moviendo manos o pies, o cambiando constantemente de posición cuando está sentado?',
      value: null,
    },
    {
      text: '¿Tiene dificultad para permanecer sentado en situaciones en las que se espera que lo haga (por ejemplo, reuniones, clases)?',
      value: null,
    },
    {
      text: '¿Realiza actividades físicas excesivas en situaciones en las que es inapropiado?',
      value: null,
    },
    {
      text: '¿Habla en exceso en situaciones sociales o de trabajo?',
      value: null,
    },
    {
      text: '¿Parece estar siempre "en marcha" o "impulsado por un motor"?',
      value: null,
    },
    {
      text: '¿Tiene dificultad para dedicarse a actividades de ocio tranquilas?',
      value: null,
    },
    {
      text: '¿Muestra irritabilidad y agitación con frecuencia?',
      value: null,
    },
    {
      text: '¿Es torpe o tiene accidentes debido a la impulsividad?',
      value: null,
    },
  ];

  questionsImpulsividad = [
    {
      text: '¿Responde a preguntas antes de que se hayan completado?',
      value: null,
    },
    {
      text: '¿Tiene dificultad para esperar su turno en situaciones grupales o conversaciones?',
      value: null,
    },
    {
      text: '¿Interrumpe o se entromete en conversaciones o actividades de otros?',
      value: null,
    },
    {
      text: '¿Muestra comportamiento negativo y desafiante con frecuencia?',
      value: null,
    },
    {
      text: '¿Cambia de humor rápidamente y con facilidad?',
      value: null,
    },
  ];

  showDisclaimer = true;
  showInatencion = false;
  showHiperactividad = false;
  showImpulsividad = false;
  showResultado = false;
  testSum: any;
  questionsSum: any;
  resultado: string;

  constructor() {}

  ngOnInit(): void {}

  disclaimerShow(): void {
    this.showDisclaimer = !this.showDisclaimer;
  }

  inatencionShow(): void {
    this.showInatencion = !this.showInatencion;
  }
  hiperactividadShow(): void {
    this.showHiperactividad = !this.showHiperactividad;
  }
  impulsividadShow(): void {
    this.showImpulsividad = !this.showImpulsividad;
  }

  setValue(question: any, value: number) {
    question.value = value;
  }

  sumar(hide: string, questionnaire: any[]): void {
    let sum = 0;
    let questionsSum = 0;
    let result = 0;
    let hasNullValue = false; // Validar si alguna pregunta tiene valor null

    for (const question of questionnaire) {
      if (question.value === null) {
        hasNullValue = true;
        break;
      }
      sum += question.value;
      questionsSum += 1;
    }

    if (hasNullValue) {
      alert('Por favor responda todas las preguntas.');
      return; // Exit the method if a null value is found
    }

    this.testSum = (this.testSum || 0) + sum;
    this.questionsSum = (this.questionsSum || 0) + questionsSum;
    console.log('Sum of question values:', this.testSum);
    console.log('Sum of questions:', this.questionsSum);

    result = (this.testSum / this.questionsSum) * 100;

    if (result <= 30) {
      this.resultado = 'Baja';
    } else if (result > 30 && result <= 60) {
      this.resultado = 'Moderada';
    } else {
      this.resultado = 'Alta';
    }

    console.log(this.questionsSum, result, this.resultado);

    if (hide === 'inatencion') {
      this.disclaimerShow();
      this.inatencionShow();
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.hiperactividadShow();
      }, 1000);
    } else if (hide === 'hiperactividad') {
      this.hiperactividadShow();
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.impulsividadShow();
      }, 1000);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.impulsividadShow();
        this.showResultado = true;
      }, 600);
    }
  }

  resetQuestionnaire(questionnaire: any[]): void {
    for (const question of questionnaire) {
      question.value = null;
    }
  }
}

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
  selector: 'app-test-nino',
  templateUrl: './test-nino.component.html',
  styleUrls: ['./test-nino.component.css', '../tests.component.css'],
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
export class TestNinoComponent implements OnInit {
  questionsInatencion = [
    {
      text: '¿Le resulta difícil mantener la atención en tareas escolares o actividades de juego?',
      value: null,
    },
    {
      text: '¿Parece no escuchar cuando se le habla directamente?',
      value: null,
    },
    {
      text: '¿Comete errores por descuido en trabajos escolares o en otras actividades?',
      value: null,
    },
    {
      text: '¿Le disgustan, evita o rechaza actividades que requieren esfuerzo mental sostenido (por ejemplo, tareas escolares complejas o lecturas largas)?',
      value: null,
    },
    {
      text: '¿Tiene dificultad para organizar tareas y responsabilidades diarias?',
      value: null,
    },
    {
      text: '¿Pierde fácilmente objetos necesarios para la escuela o actividades recreativas (por ejemplo, útiles escolares, juguetes, ropa)?',
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
      text: '¿Mueve con frecuencia manos o pies, o se revuelve en el asiento?',
      value: null,
    },
    {
      text: '¿Se levanta del asiento en el salón de clases u otras situaciones en las que se supone que debe estar sentado?',
      value: null,
    },
    {
      text: '¿Corre o trepa en exceso en situaciones en las que es inapropiado?',
      value: null,
    },
    {
      text: '¿Habla en exceso en situaciones sociales?',
      value: null,
    },
    {
      text: '¿Parece estar siempre activo, como impulsado por un motor encendido?',
      value: null,
    },
    {
      text: '¿Tiene dificultad para jugar tranquilamente o dedicarse a actividades de descanso?',
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
      text: '¿Tiene dificultad para esperar su turno en situaciones grupales o en juegos?',
      value: null,
    },
    {
      text: '¿Interrumpe o se entromete en conversaciones o juegos de otros?',
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
        // Validar si alguna pregunta tiene valor null
        hasNullValue = true;
        break;
      }
      sum += question.value; // sumatoria de los valores
      questionsSum += 1; // sumatoria de los preguntas
    }

    if (hasNullValue) {
      alert('Por favor responda todas las preguntas.');
      return; // Salir si un valor es nulo
    }

    this.testSum = (this.testSum || 0) + sum; //guardar suma de los valores
    this.questionsSum = (this.questionsSum || 0) + questionsSum; //guardar suma de las preguntas
    console.log('Sum of question values:', this.testSum);
    console.log('Sum of questions:', this.questionsSum);

    result = (this.testSum / this.questionsSum) * 100; //Arrojar porcentaje

    //Rangos de porcentaje bajo, moderado y alto
    if (result < 40) {
      this.resultado = 'Baja';
    } else if (result >= 40 && result <= 60) {
      this.resultado = 'Moderada';
    } else {
      this.resultado = 'Alta';
    }

    console.log(this.questionsSum, result, this.resultado);
    //Logica para mostrar y ocultar las secciones del test
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

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-adulto',
  templateUrl: './test-adulto.component.html',
  styleUrls: ['./test-adulto.component.css'],
})
export class TestAdultoComponent implements OnInit {
  showForm = true;

  constructor() {}

  ngOnInit(): void {}

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

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Calcula la probabilidad aquí y muestra los resultados
      console.log(form.value);
    } else {
      alert('Por favor, responde todas las preguntas.');
    }
  }
}

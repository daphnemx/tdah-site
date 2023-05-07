import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2.5s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ResultadoComponent implements OnInit {
  @Input() tipoDeTest: any;
  @Input() titulo: string;
  resultadosNino = [
    {
      title: 'Baja',
      descripcion:
        'Gracias por tomarse el tiempo para completar el test en nombre de su hijo. Los resultados indican una probabilidad baja de TDAH. Aun así, si siguen preocupados, les recomendamos que consulten con un profesional de la salud calificado para una evaluación más exhaustiva. Los invitamos a ir a la sección contactos.',
    },
    {
      title: 'Moderada',
      descripcion:
        'Según los resultados del test, existe una probabilidad moderada de que su hijo tenga TDAH. Sería beneficioso buscar la opinión de un profesional de la salud calificado para una evaluación más detallada y abordar las inquietudes que puedan tener. Pueden ir a la sección contactos ahí encontraran a especialistas en el area.',
    },
    {
      title: 'Alta',
      descripcion:
        'Los resultados del test sugieren una probabilidad alta de TDAH en su hijo. Les recomendamos encarecidamente que consulten con un profesional de la salud calificado para obtener una evaluación adecuada y un diagnóstico preciso. En la sección Contactos pueden visualizar especialistas y centros expertos en el area. Sepan que con el apoyo y las estrategias adecuadas, los niños con TDAH pueden desarrollarse exitosamente y disfrutar de una vida plena.',
    },
  ];
  resultadosAdulto = [
    {
      title: 'Baja',
      descripcion:
        'Los resultados indican una probabilidad baja de TDAH. Si aún tienes preocupaciones, no dudes en consultar a un profesional de la salud calificado para una evaluación más completa. Siempre es un buen momento para abordar cualquier inquietud que puedas tener y buscar el apoyo necesario. Te invitamos a visitar la sección de contactos donde encontrarás información de especialistas y centros especializados en el área.',
    },
    {
      title: 'Moderada',
      descripcion:
        'Según los resultados del test, existe una probabilidad moderada de TDAH. No te preocupes, este puede ser el comienzo de un cambio positivo en tu vida. Te recomendamos buscar la opinión de un profesional de la salud calificado para una evaluación más detallada. Con el apoyo adecuado, podrás enfrentar los desafíos del TDAH y abrirte camino hacia un futuro exitoso y gratificante. Te invitamos a visitar la sección de contactos donde encontrarás información de especialistas y centros especializados en el área.',
    },
    {
      title: 'Alta',
      descripcion:
        'Los resultados del test sugieren una probabilidad alta de TDAH. Te recomendamos encarecidamente que consultes con un profesional de la salud calificado para obtener una evaluación adecuada y un diagnóstico preciso. Queremos que sepas que, con el apoyo y las estrategias adecuadas, puedes superar los desafíos del TDAH y alcanzar tus metas en la vida. Este puede ser el comienzo de una nueva etapa llena de oportunidades y crecimiento personal. Te invitamos a visitar la sección de contactos donde encontrarás información de especialistas y centros especializados en el área.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getDescriptionByTitle(
    titulo: string,
    resultados: { title: string; descripcion: string }[]
  ): string {
    const result = resultados.find((result) => result.title === titulo);
    return result ? result.descripcion : '';
  }
}

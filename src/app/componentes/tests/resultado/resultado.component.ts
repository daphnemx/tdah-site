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
        animate('2s', style({ opacity: 1 })),
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
        'Los resultados indican una probabilidad baja de TDAH. Aun así, si siguen preocupados, no duden en consultar con un profesional de la salud calificado para una evaluación más exhaustiva. Juntos, pueden abordar cualquier inquietud que puedan tener.',
    },
    {
      title: 'Moderada',
      descripcion:
        'Según los resultados del test, existe una probabilidad moderada de que su hijo tenga TDAH. No se preocupen, sería beneficioso buscar la opinión de un profesional de la salud calificado para una evaluación más detallada. Con el apoyo adecuado, su hijo puede superar los desafíos que el TDAH pueda presentar.',
    },
    {
      title: 'Alta',
      descripcion:
        'Los resultados del test sugieren una probabilidad alta de TDAH en su hijo. Les recomendamos encarecidamente que consulten con un profesional de la salud calificado para obtener una evaluación adecuada y un diagnóstico preciso. Queremos que sepan que, con el apoyo y las estrategias adecuadas, los niños con TDAH pueden desarrollarse exitosamente y disfrutar de una vida plena. Juntos, pueden enfrentar este desafío y ayudar a su hijo a alcanzar su máximo potencial.',
    },
  ];
  resultadosAdulto = [
    {
      title: 'Baja',
      descripcion:
        'Los resultados indican una probabilidad baja de TDAH. Si aún tienes preocupaciones, no dudes en consultar a un profesional de la salud calificado para una evaluación más completa. Siempre es un buen momento para abordar cualquier inquietud que puedas tener y buscar el apoyo necesario.',
    },
    {
      title: 'Moderada',
      descripcion:
        'Los resultados del test sugieren una probabilidad alta de TDAH. Te recomendamos encarecidamente que consultes con un profesional de la salud calificado para obtener una evaluación adecuada y un diagnóstico preciso. Queremos que sepas que, con el apoyo y las estrategias adecuadas, puedes superar los desafíos del TDAH y alcanzar tus metas en la vida. Este puede ser el comienzo de una nueva etapa llena de oportunidades y crecimiento personal.',
    },
    {
      title: 'Alta',
      descripcion:
        'Los resultados del test sugieren una probabilidad alta de TDAH en su hijo. Les recomendamos encarecidamente que consulten con un profesional de la salud calificado para obtener una evaluación adecuada y un diagnóstico preciso. Queremos que sepan que, con el apoyo y las estrategias adecuadas, los niños con TDAH pueden desarrollarse exitosamente y disfrutar de una vida plena. Juntos, pueden enfrentar este desafío y ayudar a su hijo a alcanzar su máximo potencial.',
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

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
  AnimationTriggerMetadata,
  keyframes,
} from '@angular/animations';

const ANIMATION_DURATION = '100ms';
const TRANSITION = ANIMATION_DURATION + ' ease-in-out';

export const slideInRightList: AnimationTriggerMetadata = trigger(
  'slideInRightList',
  [
    transition(':enter, :leave', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translate(10%, 5%)' }),

          stagger('300ms', [
            animate(
              '300ms cubic-bezier(.25,.8,.25,1)',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translate(10%, 5%)',
                  offset: 0,
                }),
                style({
                  opacity: 0.45,
                  transform: 'translate(0)',
                  offset: 0.7,
                }),
                style({ transform: 'translateX(-20px)', offset: 0.9 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
              ])
            ),
          ]),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0)', opacity: 1 }),
          stagger(ANIMATION_DURATION, [
            animate(
              TRANSITION,
              style({ transform: 'translateX(20%)', opacity: 0 })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]
);

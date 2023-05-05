import {
  trigger,
  style,
  animate,
  transition,
  query,
  sequence,
  group,
  stagger,
  AnimationTriggerMetadata,
} from "@angular/animations";

const ANIMATION_DURATION = "300ms";
const TRANSITION = ANIMATION_DURATION + " ease-in-out";

export const slideInRightList: AnimationTriggerMetadata = trigger(
  "slideInRightList",
  [
    transition(":enter, :leave", [
      query(
        ":enter",
        [
          style({ transform: "translateX(100%)", opacity: 0 }),
          stagger(ANIMATION_DURATION, [
            animate(
              TRANSITION,
              style({ transform: "translateX(0)", opacity: 1 })
            ),
          ]),
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0)", opacity: 1 }),
          stagger(ANIMATION_DURATION, [
            animate(
              TRANSITION,
              style({ transform: "translateX(100%)", opacity: 0 })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]
);

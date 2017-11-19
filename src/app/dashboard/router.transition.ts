import {animate, state, style, transition, trigger} from '@angular/animations';

export function routerTransition() {
  return flyInOut();
}

export function flyInOut() {
  return trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)', opacity: 1})),
    // state('out', style({transform: 'translateX(100)'})),
    transition(':enter', [
      style({transform: 'translateX(-100%)', opacity: 0}),
      animate(200)
    ]),
    transition(':leave', [
      animate(200, style({transform: 'translateX(100%)', opacity: 1}))
    ])
  ]);
}

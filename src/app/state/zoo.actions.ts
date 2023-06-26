import { createAction, props } from '@ngrx/store';

export const addAnimal = createAction(
  '[Zoo] Add Animal',
  props<{ animalName: String }>()
);
export const removeAnimal = createAction(
  '[Zoo] Remove Animal',
  props<{ animalName: String }>()
);
export const resetAnimals = createAction('[Zoo] Reset Animal');

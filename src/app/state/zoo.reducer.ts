import { createReducer, on } from '@ngrx/store';
import { addAnimal, removeAnimal, resetAnimals } from './zoo.actions';
import { initialState } from './zoo.state';

const _zooReducer = createReducer(
  initialState, //get initial state from the store

  //works when Add is triggered
  on(addAnimal, (state, action) => {
    return {
      ...state,
      animals: [...state.animals, action.animalName],
    };
  }),
  //works when remove action is triggered
  on(removeAnimal, (state, action) => {
    //state will take the value of initialState
    return {
      ...state, //first, return the state cuz immutable
      animals: state.animals.filter((name) => name !== action.animalName), //then change the properties
    };
  }),
  //works when reset action is triggered
  on(resetAnimals, (state) => {
    return {
      ...state,
      animals: [],
    };
  })
);

export function zooReducer(state: any, action: any) {
  return _zooReducer(state, action);
}

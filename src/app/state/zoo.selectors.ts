import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ZooStateModel } from './zoo.state';

const getZooState = createFeatureSelector<ZooStateModel>('zoo'); //this is the name i put in app.modules

export const getAnimalsNames = createSelector(getZooState, (state) => {
  return state.animals;
});

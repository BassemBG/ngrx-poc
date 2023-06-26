import { Component } from '@angular/core';
import { addAnimal, removeAnimal, resetAnimals } from '../state/zoo.actions';
import { ZooStateModel } from '../state/zoo.state';
import { Store } from '@ngrx/store';
import { getAnimalsNames } from '../state/zoo.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css'],
})
export class ZooComponent {
  animalsNames: any;
  animalsNames$: Observable<String[]>;

  constructor(private store: Store<{ zoo: ZooStateModel }>) {
    //select smth from state
    this.animalsNames$ = this.store.select(getAnimalsNames);

    this.animalsNames$?.subscribe((res: any) => {
      console.log(res);
      this.animalsNames = res;
    });
  } //create instance of Store class

  ngOnInit(): void {}

  addAnimal(animalName: string) {
    this.store.dispatch(addAnimal({ animalName: animalName })); //trigger action when button is clicked
  }

  deleteAnimal(animalName: string) {
    this.store.dispatch(removeAnimal({ animalName: animalName })); //trigger action when button is clicked
  }

  resetAnimals() {
    this.store.dispatch(resetAnimals()); //trigger action when button is clicked
  }
}

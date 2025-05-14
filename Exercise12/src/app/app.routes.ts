import { Routes } from '@angular/router';
import {PikachuComponent} from './features/pikachu/pikachu.component';
import {BulbasaurComponent} from './features/bulbasaur/bulbasaur.component';
import {PageNotFoundComponent} from './features/page-not-found/page-not-found.component';
import {CardComponent} from './features/card/card.component';
import {CharizardComponent} from './features/charizard/charizard.component';
import {CharmanderComponent} from './features/charmander/charmander.component';
import {CharmeleonComponent} from './features/charmeleon/charmeleon.component';
import {IvysaurComponent} from './features/ivysaur/ivysaur.component';
import {PidgeotComponent} from './features/pidgeot/pidgeot.component';
import {VenusaurComponent} from './features/venusaur/venusaur.component';

export const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
  {
    path: 'pikachu',
    component: PikachuComponent,
  },
  {
    path: 'bulbasaur',
    component: BulbasaurComponent,
  },
  {
    path: 'charizard',
    component: CharizardComponent,
  },
  {
    path: 'charmander',
    component: CharmanderComponent,
  },
  {
    path: 'charmeleon',
    component: CharmeleonComponent,
  },
  {
    path: 'ivysaur',
    component: IvysaurComponent,
  },
  {
    path: 'pidgeot',
    component: PidgeotComponent,
  },
  {
    path: 'venusaur',
    component: VenusaurComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

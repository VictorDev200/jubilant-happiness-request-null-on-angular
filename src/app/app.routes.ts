import { Routes } from '@angular/router';
import { Sample } from './sample/sample';
import { Sample2 } from './sample2/sample2';
import { Main } from './main/main';

export const routes: Routes = [
  {
    path: '',
    component: Main
  },
  {
    path: 'sample',
    component: Sample
  },
  {
    path: 'sample2',
    component: Sample2
  },
];

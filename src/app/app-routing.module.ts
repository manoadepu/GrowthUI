import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'view-mental', loadChildren: './view-mental/view-mental.module#ViewMentalPageModule' },
  { path: 'view-physical', loadChildren: './view-physical/view-physical.module#ViewPhysicalPageModule' },
  { path: 'view-expense', loadChildren: './view-expense/view-expense.module#ViewExpensePageModule' },
  { path: 'view-exercise', loadChildren: './view-exercise/view-exercise.module#ViewExercisePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

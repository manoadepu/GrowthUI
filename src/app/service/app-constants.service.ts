import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

  constructor() { }

  public static BASE_URI = 'http://localhost:8080/growth/';

  public static SAVE_MENTAL_ENDPOINT = AppConstantsService.BASE_URI + 'mental/save/';
  public static SAVE_PHYSICAL_ENDPOINT = AppConstantsService.BASE_URI + 'physical/save/';
  public static SAVE_EXPENSE_ENDPOINT = AppConstantsService.BASE_URI + 'expense/save/';
  public static SAVE_EXERCISE_ENDPOINT = AppConstantsService.BASE_URI + 'excercise/save/';

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SavePhysical} from '../../models/SavePhysical';
import {AppConstantsService} from '../app-constants.service';
import {SaveExercise} from '../../models/SaveExercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private httpClient: HttpClient) { }
  saveExerciseData(exerciseData: SaveExercise) {
    return this.httpClient.post(AppConstantsService.SAVE_EXERCISE_ENDPOINT + 'manoharadepu', exerciseData, {responseType: 'text'});
  }
}


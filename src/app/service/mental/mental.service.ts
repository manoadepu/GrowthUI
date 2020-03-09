import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstantsService} from '../app-constants.service';
import {SaveMental} from '../../models/SaveMental';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentalService {

  constructor(private httpClient: HttpClient) { }

  saveMentalData(saveMentalData: SaveMental): Observable<any> {
    return this.httpClient.post(AppConstantsService.SAVE_MENTAL_ENDPOINT + 'manoharadepu', saveMentalData, {responseType: 'text'});
  }
}

import { Injectable } from '@angular/core';
import {AppConstantsService} from '../app-constants.service';
import {HttpClient} from '@angular/common/http';
import {SavePhysical} from '../../models/SavePhysical';

@Injectable({
  providedIn: 'root'
})
export class PhysicalService {

  constructor(private httpClient: HttpClient) { }
  savePhysicalData(physicalData: SavePhysical) {
    return this.httpClient.post(AppConstantsService.SAVE_PHYSICAL_ENDPOINT + 'manoharadepu', physicalData, {responseType: 'text'});
  }
}

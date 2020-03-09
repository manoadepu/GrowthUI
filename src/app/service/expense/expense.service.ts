import { Injectable } from '@angular/core';
import {SaveMental} from '../../models/SaveMental';
import {Observable} from 'rxjs';
import {AppConstantsService} from '../app-constants.service';
import {HttpClient} from '@angular/common/http';
import {SavePhysical} from '../../models/SavePhysical';
import {SaveExpense} from '../../models/SaveExpense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private httpClient: HttpClient) { }

  saveExpenseData(saveExpenseData: SaveExpense): Observable<any> {
    return this.httpClient.post(AppConstantsService.SAVE_EXPENSE_ENDPOINT + 'manoharadepu', saveExpenseData, {responseType: 'text'});
  }

}

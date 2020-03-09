import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SaveMental} from '../models/SaveMental';
import {SavePhysical} from '../models/SavePhysical';
import {SaveExercise} from '../models/SaveExercise';
import {SaveExpense} from '../models/SaveExpense';
import {MentalService} from '../service/mental/mental.service';
import {PhysicalService} from '../service/physical/physical.service';
import {ExerciseService} from '../service/exercise/exercise.service';
import {ExpenseService} from '../service/expense/expense.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  mentalForm: FormGroup;
  physicalForm: FormGroup;
  expenseForm: FormGroup;
  exerciseForm: FormGroup;

  mentalDataModal: SaveMental = {};
  physicalDataModal: SavePhysical = {};
  exerciseDataModal: SaveExercise = {};
  expenseDataModal: SaveExpense = {};

  mentalData;
  physicalData;
  expenseDataType;
  expenseDataPrice;
  excerciseDataType;
  excerciseDataTime;

  mentalDataSavedNotification = false;
  physicalDataSavedNotification = false
  expenseDataSavedNotification = false
  exerciseDataSavedNotification = false

  constructor(private fb: FormBuilder,
              private mentalService: MentalService,
              private physicaService: PhysicalService,
              private exerciseService: ExerciseService,
              private expenseService: ExpenseService) { }


  ngOnInit() {
    this.createMentalForm();
    this.createPhysicalForm();
    this.createExcerciseForm();
    this.createExpenseForm();
  }

  createMentalForm() {
    this.mentalForm = this.fb.group({
      mentalFormControlText: ['']
    });
  }
  createPhysicalForm() {
    this.physicalForm = this.fb.group({
      physicalFormControlText: ['']
    });
  }
  createExpenseForm() {
    this.expenseForm = this.fb.group({
      expenseFormControlTextType: [''],
      expenseFormControlTextPrice: ['']
    });
  }
  createExcerciseForm() {
    this.exerciseForm = this.fb.group({
      exerciseFormControlTextType: [''],
      exerciseFormControlTextTime: ['']
    });
  }
  SaveMentalData() {
    this.mentalDataModal.notes = this.mentalData;
    this.mentalDataSavedNotification = true;
    this.mentalService.saveMentalData(this.mentalDataModal).subscribe((status) => {
      console.log('post call status: ' + status);
    });
  }
  SavePhysicalData() {
    this.physicalDataModal.notes = this.physicalData;
    this.physicalDataSavedNotification = true;
    this.physicaService.savePhysicalData(this.physicalDataModal).subscribe((status) => {
      console.log('post call status: ' + status);
    });
  }
  SaveExpenseData() {
    this.expenseDataModal.expenseType = this.expenseDataType;
    this.expenseDataModal.amount = this.expenseDataPrice;
    this.expenseDataSavedNotification = true;
    this.expenseService.saveExpenseData(this.expenseDataModal).subscribe((status) => {
      console.log('post call status: ' + status);
    });
  }
  SaveExcerciseData() {
    console.log('Exercise type: ' + this.excerciseDataType);
    console.log('Exercise time: ' + this.excerciseDataTime);
    this.exerciseDataModal.exerciseName = this.excerciseDataType;
    this.exerciseDataModal.timeSpent = this.excerciseDataTime;
    this.exerciseDataSavedNotification = true;
    this.exerciseService.saveExerciseData(this.exerciseDataModal).subscribe((status) => {
      console.log('post call status: ' + status);
    });
  }
}

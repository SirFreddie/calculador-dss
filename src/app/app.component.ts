import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  control1 = new FormControl(0, [Validators.min(0), Validators.max(14)]);
  control2 = new FormControl(0, [Validators.min(0), Validators.max(10)]);
  control3 = new FormControl(0, [Validators.min(0), Validators.max(10)]);
  controlResult: number = 0;

  obligatorio1 = new FormControl(0, [Validators.min(0), Validators.max(100)]);
  obligatorio2 = new FormControl(0, [Validators.min(0), Validators.max(100)]);
  obligatorio3 = new FormControl(0, [Validators.min(0), Validators.max(100)]);
  obligatorio4 = new FormControl(0, [Validators.min(0), Validators.max(100)]);
  obligatorio5 = new FormControl(0, [Validators.min(0), Validators.max(100)]);
  obligatorio6 = new FormControl(0, [Validators.min(0), Validators.max(100)]);
  obligatorioResult: number = 0;

  notaTotal: number = 0;

  tengoQueSacar: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  calcular() {
    this.controlResult =
      (((this.control1.value || 0) +
        (this.control2.value || 0) +
        (this.control3.value || 0)) *
        15) /
      34;

    this.obligatorioResult =
      (((this.obligatorio1.value || 0) +
        (this.obligatorio2.value || 0) +
        (this.obligatorio3.value || 0) +
        (this.obligatorio4.value || 0) +
        (this.obligatorio5.value || 0) +
        (this.obligatorio6.value || 0)) *
        60) /
      600;

    this.notaTotal = this.controlResult + this.obligatorioResult;

    this.tengoQueSacar = 75 - this.notaTotal;
  }
}

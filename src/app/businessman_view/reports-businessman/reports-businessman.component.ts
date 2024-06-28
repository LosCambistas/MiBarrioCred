import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-reports-businessman',
  templateUrl: './reports-businessman.component.html',
  styleUrl: './reports-businessman.component.css'
})
export class ReportsBusinessmanComponent {
  @Input() reports: any[] = [];

  constructor() {
  }


}

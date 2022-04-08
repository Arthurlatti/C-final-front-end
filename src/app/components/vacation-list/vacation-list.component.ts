import { Component, OnInit } from '@angular/core';
import { Vacation } from 'src/app/Models/vacation';
import { VacationService } from 'src/app/services/vacation.service';

@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.css']
})
export class VacationListComponent implements OnInit {

  vacations: Vacation[];


  constructor(private vacationService: VacationService) { }

  ngOnInit(): void {
    this.vacationService.getVacationList().subscribe(results => {
      console.log(results)
      this.vacations = results
    });

  }

  updateVisited() {
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacation } from 'src/app/Models/vacation';
import { VacationService } from 'src/app/services/vacation.service';

@Component({
  selector: 'app-vacation-new',
  templateUrl: './vacation-new.component.html',
  styleUrls: ['./vacation-new.component.css']
})
export class VacationNewComponent implements OnInit {

  newPlace: Vacation = new Vacation;

  constructor(private service: VacationService, private router: Router) { }

  ngOnInit(): void {
    this.newPlace = new Vacation;
  }
    createVacation() {
      this.service.createVacation(this.newPlace).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
}

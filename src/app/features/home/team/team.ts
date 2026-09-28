import { Component, OnInit } from '@angular/core';
import { BusinessDataService } from '../../../core/services/business-data.service';
import { Barber } from '../../../core/models/barber.model';

@Component({
  selector: 'app-team',
  standalone: false,
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team implements OnInit {
  barbers: Barber[] = [];

  constructor(private businessDataService: BusinessDataService) {}

  ngOnInit(): void {
    this.barbers = this.businessDataService.getBarbers();
  }
}
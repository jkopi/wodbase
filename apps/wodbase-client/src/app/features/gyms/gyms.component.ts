import { Component, inject, OnInit } from '@angular/core';
import { Gym } from './gym';
import { GymsService } from './gyms.service';
import { NgFor, NgForOf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gyms',
  imports: [MatCardModule, MatGridListModule, RouterModule],
  templateUrl: './gyms.component.html',
  styleUrl: './gyms.component.scss',
})
export class GymsComponent implements OnInit {
  gymsService = inject(GymsService);

  gyms: Gym[] = [];
  errorMessage: string = '';

  public async ngOnInit(): Promise<void> {
    this.gymsService.getGyms().subscribe({
      next: (response) => {
        this.gyms = response;
      },
      error: (error) => {
        this.errorMessage = `Error: ${error.message}`;
      },
    });
  }
}

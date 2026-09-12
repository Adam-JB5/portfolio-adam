import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  imports: [MatCardModule, MatIconModule],
  selector: 'app-projects',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {}

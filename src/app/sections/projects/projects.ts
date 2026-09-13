import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Project, projectsData } from '../../core/data/projects.data';

@Component({
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  selector: 'app-projects',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  projects = signal(projectsData);
}
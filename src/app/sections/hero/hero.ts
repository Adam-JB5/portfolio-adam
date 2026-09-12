import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'

@Component({
  imports: [MatButtonModule],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}

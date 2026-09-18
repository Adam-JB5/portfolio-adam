import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { Header } from './sections/header/header';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';

@Component({
  imports: [RouterOutlet, Hero, Header, Projects, Skills, Contact, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}

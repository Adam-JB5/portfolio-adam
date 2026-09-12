import { Component, HostListener, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'

@Component({
  imports: [MatButtonModule],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 10);
  }
}

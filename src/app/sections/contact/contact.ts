import { AfterViewInit, Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact implements AfterViewInit {
  private _snackBar = inject(MatSnackBar);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const emailLink = document.getElementById("email-link");

    if (emailLink) {
      emailLink.onclick = (e: MouseEvent) => {
        e.preventDefault();

        navigator.clipboard.writeText("adamjanahprof@gmail.com");

        this.openSnackBar("Email copiado al portapapeles", "Ok")
      };
    }

    this.setupAnimationObserver();
  }

  private setupAnimationObserver(): void {
    const rows = document.querySelectorAll<HTMLElement>(".contact-row");
    if (!rows.length) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = Array.from(rows).indexOf(target);
            const animation = index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight";

            target.classList.add("animate__animated", animation, "visible");
            target.classList.remove("invisible");
            this.observer?.unobserve(target);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    rows.forEach((row) => this.observer?.observe(row));
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 2000});
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

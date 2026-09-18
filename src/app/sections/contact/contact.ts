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

  ngAfterViewInit(): void {
    const emailLink = document.getElementById("email-link");

    if (emailLink) {
      emailLink.onclick = (e: MouseEvent) => {
        e.preventDefault();

        navigator.clipboard.writeText("adamjanahprof@gmail.com");

        this.openSnackBar("Email copiado al portapapeles", "Ok")
      };
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 2000});
  }
}

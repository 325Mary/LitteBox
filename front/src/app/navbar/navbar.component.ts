import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreRegistroComponent } from '../pre-registro/pre-registro.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  showDialog(): void {
    const dialogRef = this.dialog.open(PreRegistroComponent, {
      width: '500px',
      autoFocus: false,
      panelClass: 'my-dialog-container', // Utiliza la clase de contenedor personalizada
    });
  }
}

import { Injectable } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "src/app/components/login/login.component";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  abrirLogin() {
    this.dialog.open(LoginComponent, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'contenedorLogin',
      position: { top: '64px', right: 'calc((100vw - 1110px) / 2)' }
    });
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {



  constructor(
    public router: Router,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
  }

  abrirLogin() {
    this.modalService.abrirLogin();
  }


  ngOnDestroy(): void {
  }

}

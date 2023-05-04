import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/data-client.service';

@Component({
  selector: 'app-tabla-prueba',
  templateUrl: './tabla-prueba.component.html',
  styleUrls: ['./tabla-prueba.component.css']
})

export class TablaPruebaComponent implements OnInit {

  datos: any = [];
  idCategoria = 2;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserFiles(this.idCategoria).subscribe(res => {
      this.datos = res;
    });
  }
}

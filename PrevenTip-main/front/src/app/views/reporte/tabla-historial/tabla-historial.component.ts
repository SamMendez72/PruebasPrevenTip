import { Component, OnInit } from '@angular/core'; 
import { UserService } from '../../../services/data-client.service';

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styleUrls: ['./tabla-historial.component.css']
})
export class TablaHistorialComponent implements OnInit{
  datos: any = [];
  idCategoria = 1;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserFiles(this.idCategoria).subscribe(res => {
      this.datos = res;
    });
  }
}

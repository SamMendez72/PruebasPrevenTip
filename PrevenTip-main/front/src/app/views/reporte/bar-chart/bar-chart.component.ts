import { Component, OnInit} from '@angular/core';
import { UserService } from './../../../services/data-client.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})




export class BarChartComponent implements OnInit {
  data: any[];
  Id_cliente = 6; // Cambia esto por el ID del usuario que deseas mostrar
  userRitmo: number;
  userFrecuencia: number;
  userPeso: number;
  userAltura: number;
  userBMI: number;
  userSaturacion: number;
  userTemperatura: number;
  userPresion: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser(this.Id_cliente).subscribe(user => {
      this.data = [user.ritmo_cardiaco];

      this.userRitmo = user.ritmo_cardiaco;
      this.userFrecuencia = user.frecuencia_respiratoria;
      this.userPeso = user.peso;
      this.userAltura = user.altura;
      this.userBMI = user.indice_masa_corporal;
      this.userSaturacion = user.saturacion_oxigeno;
      this.userTemperatura = user.temperatura;
      this.userPresion = user.presion_sanguinea_sistolica;

    });
  }
}

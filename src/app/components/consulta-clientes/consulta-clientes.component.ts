import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-consulta-clientes',
  standalone: true,
  imports: [CommonModule,
  MatTableModule],
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css',
})
export class ConsultaClientesComponent implements OnInit {

  columns = ['id', 'nome', 'cpf', 'telefone', 'email']

  clientes : Cliente[] = [];

  constructor(
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteService.getClients()?.subscribe({
      next: (data) => {

        this.clientes = data;
        console.log(this.clientes);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}

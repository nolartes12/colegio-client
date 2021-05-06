import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Estudiante } from "../model/estudiante";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  show: boolean = false;
  buscar?: number;
  estudiantes?: Estudiante[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.findById();
  }

  findAll(): void {
    this.httpClient.get<Estudiante[]>(environment.url.concat("estudiante")).subscribe(data => {
      console.log(data);
      this.estudiantes = data;
    });
  }

  findById(): void {
    if (!this.buscar && this.buscar !== 0) {
      this.findAll();
      return;
    }

    let aux: Estudiante[] = [];
    this.httpClient.get<Estudiante>(environment.url.concat("estudiante/" + this.buscar)).subscribe(data => {
      console.log(data);
      aux.push(data);
      this.estudiantes = aux;
    });
  }

  deleteById(id: number) :void {
    this.httpClient.delete<Estudiante>(environment.url.concat("estudiante/" + id)).subscribe(data => {
      console.log(data);
    });
  }

}

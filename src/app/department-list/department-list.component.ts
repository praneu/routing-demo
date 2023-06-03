import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'department-list',
  template: `
  <h2>Department List</h2>
  <ul class="items">
    <li (click)="onSelect(department)" *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span> {{department.name}}
    </li>
  </ul>  
  `,
  styles: [``]
})
export class DepartmentListComponent {

  departments =[
    { "id": 1, "name": "Angular"},
    { "id": 2, "name": "Node"},
    { "id": 3, "name": "MongoDB"},
    { "id": 4, "name": "Ruby"},
    { "id": 5, "name": "Bootstrap"}
  ]

  constructor(private router: Router) {}

  onSelect(department: { id: any; }){
     this.router.navigate(['/departments', department.id]);
  }

}

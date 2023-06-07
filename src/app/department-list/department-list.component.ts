import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'department-list',
  template: `
  <h2>Department List</h2>
  <ul class="items">
    <li (click)="onSelect(department)" [class.selected]="isSelected(department)"  *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span> {{department.name}}
    </li>
  </ul>  
  `,
  styles: [``]
})
export class DepartmentListComponent {

  public selectedId = 0;

  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" }
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') as string)
      this.selectedId = id;
    })

  }

  onSelect(department: any) {

    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }

}


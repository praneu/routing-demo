import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'department-detail',
  template: `
   <h3>
     You have selected department with id : {{departmentID}}
   </h3>
  `,
  styles: [ ]
})
export class DepartmentDetailComponent {

  public departmentID = 0;
  constructor(private route: ActivatedRoute ) {}

  ngOnInit(){
    let id = parseInt(this.route.snapshot.paramMap.get('id')as string);
    this.departmentID = id;
  }

}

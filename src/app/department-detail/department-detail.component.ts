import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'department-detail',
  template: `
   <h3>
     You have selected department with id : {{departmentID}}
   </h3>
   <!--Child Routes -->
    <p>
      <button (click)="gotoOverview()">Overview</button>
      <button (click)="gotoContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

   <!--ParamMap Observables -->
   <p>
     <!-- <a (click)="goPrevious()" > Previous </a>
           <a (click)="goNext() "> Next </a> -->
    <button (click)="goPrevious()" > Previous </button>
    <button (click)="goNext() "> Next </button>
   </p> 

   <div>
     <button (click)="gotoDepartments()" >Back</button>
   </div> 
  `,
  styles: [ ]
})
export class DepartmentDetailComponent {

  public departmentID = 0;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(){
   // let id = parseInt(this.route.snapshot.paramMap.get('id')as string); // snapshot approach
   // this.departmentID = id;
   this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id') as string)
    this.departmentID = id; 
   })
   
  }

  goPrevious(){
     let previousId = this.departmentID - 1 ;
     this.router.navigate(['/departments', previousId])
  }

  goNext(){
    let nextId = this.departmentID + 1;
    this.router.navigate(['/departments', nextId])

  }
  //Optional Route Paramete 
  gotoDepartments(){
    let selectedId = this.departmentID ? this.departmentID : null ;
    this.router.navigate(['/departments',{id: selectedId}]);// id = 1 optional
  }

  //Child Routes
  gotoOverview(){
   this.router.navigate(['overview'], {relativeTo: this.route});
  }

  gotoContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}

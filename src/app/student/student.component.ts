import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:any;
  constructor(private service:ServiceService) { }

  ngOnInit() {
    var observable=this.service.Select();
    observable.subscribe((result)=>{
      console.log(result);
      this.students=result;
    })
    
  }

}

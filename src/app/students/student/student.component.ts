import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService : StudentService) { }

  ngOnInit() {
  }

  resetForm(form? : NgForm){
    if(form == null)
      form.reset();
      
    this.studentService.selectedStudent = {
      RollNumber : null,
      FirstName : '',
      LastName:'',
      Class:'',
      Division:'',
      DateOfBirth :null,
    }
  }

}

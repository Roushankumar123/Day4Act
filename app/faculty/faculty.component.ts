import { Component, OnInit } from '@angular/core';
import { FacultiesService } from '../faculties.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculties:any;
  
 

  constructor(private facultyServices :FacultiesService) { }

  ngOnInit(): void {
    this.faculties=this.facultyServices.getFacultiesDetails();
    console.log("hello")
  }

}

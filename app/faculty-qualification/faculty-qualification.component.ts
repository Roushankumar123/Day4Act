import { Component, OnInit } from '@angular/core';
import { FacultiesService } from '../faculties.service';

@Component({
  selector: 'app-faculty-qualification',
  templateUrl: './faculty-qualification.component.html',
  styleUrls: ['./faculty-qualification.component.css']
})
export class FacultyQualificationComponent implements OnInit {
  faculties:any;

  constructor(private facultyservices:FacultiesService) { }

  ngOnInit(): void {
    this.faculties=this.facultyservices.getFacultiesDetails();
  }

}

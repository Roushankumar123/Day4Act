import { Component, OnInit } from '@angular/core';
import { FacultiesService } from '../faculties.service';

@Component({
  selector: 'app-me-degree',
  templateUrl: './me-degree.component.html',
  styleUrls: ['./me-degree.component.css']
})
export class MeDegreeComponent implements OnInit {
  faculties:any;

  constructor(private facultyservices:FacultiesService) { }

  ngOnInit(): void {
    this.faculties=this.facultyservices.getFacultiesDetails();
  }

}

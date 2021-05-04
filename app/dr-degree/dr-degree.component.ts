import { Component, OnInit } from '@angular/core';
import { FacultiesService } from '../faculties.service';

@Component({
  selector: 'app-dr-degree',
  templateUrl: './dr-degree.component.html',
  styleUrls: ['./dr-degree.component.css']
})
export class DrDegreeComponent implements OnInit {
  faculties:any;

  constructor(private facultyservices:FacultiesService) { }

  ngOnInit(): void {
    this.faculties=this.facultyservices.getFacultiesDetails();
  }

}

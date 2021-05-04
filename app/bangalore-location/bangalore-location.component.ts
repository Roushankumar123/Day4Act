import { Component, OnInit } from '@angular/core';
import { FacultiesService } from '../faculties.service';

@Component({
  selector: 'app-bangalore-location',
  templateUrl: './bangalore-location.component.html',
  styleUrls: ['./bangalore-location.component.css']
})
export class BangaloreLocationComponent implements OnInit {
  faculties:any;

  constructor(private facultyservices:FacultiesService) { }

  ngOnInit(): void {
    this.faculties=this.facultyservices.getFacultiesDetails();
    console.log("roushan")
  }

}

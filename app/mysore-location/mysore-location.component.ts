import { Component, OnInit } from '@angular/core';
import { FacultiesService } from '../faculties.service';

@Component({
  selector: 'app-mysore-location',
  templateUrl: './mysore-location.component.html',
  styleUrls: ['./mysore-location.component.css']
})
export class MysoreLocationComponent implements OnInit {
  faculties:any;


  constructor(private facultyservices:FacultiesService) { }

  ngOnInit(): void {
    this.faculties=this.facultyservices.getFacultiesDetails();
  }

}

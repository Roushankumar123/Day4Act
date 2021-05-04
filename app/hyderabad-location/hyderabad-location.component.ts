import { Component, OnInit } from '@angular/core';
import { FacultiesService } from '../faculties.service';

@Component({
  selector: 'app-hyderabad-location',
  templateUrl: './hyderabad-location.component.html',
  styleUrls: ['./hyderabad-location.component.css']
})
export class HyderabadLocationComponent implements OnInit {
  faculties:any;

  constructor(private facultyservices:FacultiesService) { }

  ngOnInit(): void {
    this.faculties=this.facultyservices.getFacultiesDetails();
  }

}

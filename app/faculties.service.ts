import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultiesService {
  constructor() {}
  getFacultiesDetails(){

    return [
      {
      facultyId:101,
      facultyname:'vivek',
      facultymobile:'6668887772',
      facultyEmail:'vivek@abc.com',
      facultyQualification:'Dr',
      facultyLocation:'bangalore'
    },
    {
      facultyId:102,
      facultyname:'pridhvi',
      facultymobile:'6665687772',
      facultyEmail:'pridhvi@abc.com',
      facultyQualification:'Dr',
      facultyLocation:'bangalore'
    },
    {
      facultyId:103,
      facultyname:'patrick',
      facultymobile:'6668886672',
      facultyEmail:'patrick@abc.com',
      facultyQualification:'Me',
      facultyLocation:'mysore'
    },
    {
      facultyId:104,
      facultyname:'rajesh',
      facultymobile:'6668884772',
      facultyEmail:'rajesh@abc.com',
      facultyQualification:'Me',
      facultyLocation:'bangalore'
    },
    {
      facultyId:105,
      facultyname:'bhargav',
      facultymobile:'5568887772',
      facultyEmail:'bhargav@abc.com',
      facultyQualification:'ME',
      facultyLocation:'bangalore'
    },
    {
      facultyId:106,
      facultyname:'Ajay',
      facultymobile:'6668887777',
      facultyEmail:'ajay@abc.com',
      facultyQualification:'ME',
      facultyLocation:'hyderabad'
    },
    {
      facultyId:107,
      facultyname:'bharath',
      facultymobile:'6664567772',
      facultyEmail:'Bharath@abc.com',
      facultyQualification:'ME',
      facultyLocation:'bangalore'
    },
    {
      facultyId:108,
      facultyname:'thirupati',
      facultymobile:'9894147084',
      facultyEmail:'vivek@abc.com',
      facultyQualification:'ME',
      facultyLocation:'mysore'
    },
   
  ];
  }
}

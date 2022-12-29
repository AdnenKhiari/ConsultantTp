import { Component, OnInit } from '@angular/core';
import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-list-consultants',
  templateUrl: './list-consultants.component.html',
  styleUrls: ['./list-consultants.component.scss']
})
export class ListConsultantsComponent implements OnInit {
  header: any[] = [
    {
      label: 'Name',
      name: 'name'
    },
    {
      label: 'Email',
      name: 'email'
    },
    {
      label: 'Phone',
      name: 'phone'
    },
    {
      label: 'Pole',
      name: 'pole'
    },
    {
      label: 'Date Of Admission',
      name: 'dateOfAdmission'
    }
  ]
  selected: {name: string,direction: number} = {
    name:'none',
    direction: 1
  }
  filterParPole(s: String){
    if(s){
      return this.consultants.filter((d)=> d.pole===s )
    }
    else{
      return this.consultants
    }
  }
  consultants : consultant[] = []
  consultantService: ConsultantService = {} as ConsultantService;
  setActiveCurrent(h: any){
    this.selected = {
      name: h.name,
      direction: (this.selected.name === h.name) ? 1 - this.selected.direction : 1
    }
    console.log(this.selected)
  }
  constructor(consultantService : ConsultantService){
    this.consultantService = consultantService
  }
  ngOnInit(): void {
    this.consultants = this.consultantService.consultants
  }
}

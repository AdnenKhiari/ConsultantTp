import { Injectable } from "@angular/core";

@Injectable()
export class ConsultantService{
  constructor() { }
  consultants: consultant[] = [{
    id:'1',
    name:'adnen',
    pole:'Marketing'
  },
  {
    id:'5',
    email:'adyenbd',
    phone:'546',
    pole:'project',
    dateOfAdmission:'15-12-2022'
  }]
  addConsultant(c : consultant){
    this.consultants.push(structuredClone(c))
  }
  editConsultant(id: string,c: consultant){
    console.log("Editer !"+ id)
  }
  supprimerConsultant(id: string){
    console.log("del !"+ id)
  }
}

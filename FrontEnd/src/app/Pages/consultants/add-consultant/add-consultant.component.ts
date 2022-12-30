import { Component , OnInit } from '@angular/core';
import {ConsultantService} from "../consultant.service"
@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.scss']
})
export class AddConsultantComponent implements OnInit {
  constructor(private consultantservice : ConsultantService){}
  ngOnInit(): void {

  }
  ajouterConsultant(){
    return (c: consultant)=>{
      this.consultantservice.addConsultant(c)
    }
  }
}

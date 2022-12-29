import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-edit-consultant',
  templateUrl: './edit-consultant.component.html',
  styleUrls: ['./edit-consultant.component.scss']
})
export class EditConsultantComponent {
  defaultValues: consultant | null = {
    phone: '',
    name:'adadd',
    email:'ad',
    pole:'',
    dateOfAdmission:''
  };
  id: string = ""
  constructor(private consultantservice : ConsultantService,private route: ActivatedRoute){}
  ngOnInit(): void {
    console.log("editer",this.consultantservice.consultants)
    this.route.params.subscribe((p)=>{
      this.id= p["id"];
    })
    this.defaultValues = this.consultantservice.consultants.find((c)=>{return c.id === this.id}) || {
      phone: '',
      name:'',
      email:'',
      pole:'',
      dateOfAdmission:''
    }
  }
  editerConsultant(){
    return (c: consultant)=>{
      this.consultantservice.editConsultant(<string>c.id,c)
    }
  }
}

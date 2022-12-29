import { Component,Input ,OnInit,ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-edit-consultant',
  templateUrl: './add-edit-consultant.component.html',
  styleUrls: ['./add-edit-consultant.component.scss']
})
export class AddEditConsultantComponent implements OnInit {

  @Input("submit") submit : Function | undefined = (data: consultant)=>{};
  @Input("defaultValues") defaultValues: consultant | null = {
    phone: '',
    name:'',
    email:'',
    pole:'',
    dateOfAdmission:''
  };

  formData: consultant = {
    phone: '',
    name:'',
    email:'',
    pole:'',
    dateOfAdmission:''
  };

  ngOnInit(): void {
    if(this.defaultValues)
      this.formData = this.defaultValues
  }
  SubmitForm (){
    if(this.formData.name)
    console.log(this.formData)
    console.log(this.submit)
    if(this.submit)
      this.submit(this.formData)
  }
}

import { Component,Input ,OnChanges,OnInit,ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-add-edit-consultant',
  templateUrl: './add-edit-consultant.component.html',
  styleUrls: ['./add-edit-consultant.component.scss']
})
export class AddEditConsultantComponent implements OnInit , OnChanges {

  constructor(private datepipe : DatePipe){}
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
  process_values(data: consultant){
    data.dateOfAdmission = <string>this.datepipe.transform(data.dateOfAdmission,'YYYY-MM-dd')
    return data
  }
  ngOnInit(): void {
    if(this.defaultValues)
      this.formData = this.process_values(this.defaultValues)
  }
  ngOnChanges(c: any){
    if(c.defaultValues?.currentValue){
      this.defaultValues = c.defaultValues.currentValue
      this.formData = this.process_values(<consultant>this.defaultValues)
    }
  }
  SubmitForm (){
    if(this.submit && this.formData.name)
      this.submit(this.formData)
    window.location.reload()
  }
}

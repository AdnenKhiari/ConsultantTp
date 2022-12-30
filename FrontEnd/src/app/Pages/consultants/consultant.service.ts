import { Injectable ,OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";
@Injectable()
export class ConsultantService {
  constructor(private http : HttpClient) {
  }
  /*consultants: consultant[] = [{
    id:'1',
    name:'adnen',
    pole:'marketing'
  },
  {
    id:'5',
    email:'adyenbd',
    phone:'546',
    pole:'project',
    dateOfAdmission:'15-12-2022'
  }]*/
  getConsultant(){
    return this.http.get<consultant[]>("http://localhost:8080/api/consultant")
  }
  getConsultantById(id: string){
    return this.http.get<consultant>("http://localhost:8080/api/consultant/"+id)
  }
  addConsultant(c : consultant){
    console.log(c)
    return this.http.post("http://localhost:8080/api/consultant",c).subscribe((result)=>{
      console.log("received",result)
    })
  }
  editConsultant(id: string,c: consultant){
    return this.http.put("http://localhost:8080/api/consultant/"+id,c).subscribe((result)=>{
      console.log("received",result)
    })
  }
  supprimerConsultant(id: string){
    return this.http.delete("http://localhost:8080/api/consultant/"+id).subscribe((result)=>{
      console.log("received",result)
    })
  }
}

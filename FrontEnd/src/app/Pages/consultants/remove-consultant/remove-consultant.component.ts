import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-remove-consultant',
  templateUrl: './remove-consultant.component.html',
  styleUrls: ['./remove-consultant.component.scss']
})
export class RemoveConsultantComponent implements OnInit {
  id: string = ""
  constructor(private consultantservice : ConsultantService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((p)=>{
      this.id= p["id"];
    })
  }
  supprimerConsultant(){
    this.consultantservice.supprimerConsultant(this.id)
  }
}

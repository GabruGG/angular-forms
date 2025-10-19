import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe((queryParams)=>{
      console.log("query params",queryParams)
    })

    this.route.data.subscribe((res)=> {
      console.log("resss",res)
    })
  }

}

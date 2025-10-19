import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  constructor(private route: ActivatedRoute){
    this.route.params.subscribe((param)=>{
      console.log("paramsss",param);
      console.log(param['userId'])
    })
  }

}

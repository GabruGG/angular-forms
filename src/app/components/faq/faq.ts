import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {

  constructor(private cdr: ChangeDetectorRef){

  }

  arr = [
    {
      number:1,
      clicked: false
    },
    {
      number:2,
      clicked: false
    },
    {
      number:3,
      clicked: false
    },
    {
      number:4,
      clicked: false
    },
    {
      number:5,
      clicked: false
    },
    {
      number:6,
      clicked: false
    },
    {
      number:7,
      clicked: false
    },
    {
      number:8,
      clicked: false
    },
    {
      number:9,
      clicked: false
    }
  ];

  clickedArr:any = [];

  cellClicked(index: number){
    console.log("index",index);
    if(index === 4) return;
    this.arr[index].clicked =  !this.arr[index]?.clicked;
    if(this.arr[index].clicked && !this.clickedArr.includes(index))
    this.clickedArr.push(index);
    console.log(this.clickedArr)
    if(this.clickedArr.length === 8){
      this.allCellClicked();
    }
  }

  allCellClicked(){
    console.log("all cell clicked");
    // for(let i = this.clickedArr.length - 1; i >= 0; i--){
    //   console.log("inside loop",i)
    //   let value = this.clickedArr[i];
    //   setTimeout(() => {
    //     this.arr[value].clicked = false;
    //     this.cdr.detectChanges();
    //   }, 500 *(this.clickedArr.length - i));
    // }

    for(let i = 0; i < this.clickedArr.length; i++){
      console.log("inside loop",i)
      let value = this.clickedArr[i];
      setTimeout(() => {
        this.arr[value].clicked = false;
        this.cdr.detectChanges();
      }, 500 * i);
    }

    this.clickedArr = []
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  imports: [],
  templateUrl: './scroll.html',
  styleUrl: './scroll.scss',
})
export class Scroll implements OnInit {
  renderData : any = [];
  batchSize = 15;
  batchIndex = 0;
  ngOnInit() {
    this.getData();
  }

  mockData: { id: number; name: string; city: string }[] = [
    { id: 1, name: 'User 1', city: 'Lucknow' },
    { id: 2, name: 'User 2', city: 'Lucknow' },
    { id: 3, name: 'User 3', city: 'Lucknow' },
    { id: 4, name: 'User 4', city: 'Lucknow' },
    { id: 5, name: 'User 5', city: 'Lucknow' },
    { id: 6, name: 'User 6', city: 'Lucknow' },
    { id: 7, name: 'User 7', city: 'Lucknow' },
    { id: 8, name: 'User 8', city: 'Lucknow' },
    { id: 9, name: 'User 9', city: 'Lucknow' },
    { id: 10, name: 'User 10', city: 'Lucknow' },
    { id: 11, name: 'User 11', city: 'Lucknow' },
    { id: 12, name: 'User 12', city: 'Lucknow' },
    { id: 13, name: 'User 13', city: 'Lucknow' },
    { id: 14, name: 'User 14', city: 'Lucknow' },
    { id: 15, name: 'User 15', city: 'Lucknow' },
    { id: 16, name: 'User 16', city: 'Lucknow' },
    { id: 17, name: 'User 17', city: 'Lucknow' },
    { id: 18, name: 'User 18', city: 'Lucknow' },
    { id: 19, name: 'User 19', city: 'Lucknow' },
    { id: 20, name: 'User 20', city: 'Lucknow' },
    { id: 21, name: 'User 21', city: 'Lucknow' },
    { id: 22, name: 'User 22', city: 'Lucknow' },
    { id: 23, name: 'User 23', city: 'Lucknow' },
    { id: 24, name: 'User 24', city: 'Lucknow' },
    { id: 25, name: 'User 25', city: 'Lucknow' },
    { id: 26, name: 'User 26', city: 'Lucknow' },
    { id: 27, name: 'User 27', city: 'Lucknow' },
    { id: 28, name: 'User 28', city: 'Lucknow' },
    { id: 29, name: 'User 29', city: 'Lucknow' },
    { id: 30, name: 'User 30', city: 'Lucknow' },
    { id: 31, name: 'User 31', city: 'Lucknow' },
    { id: 32, name: 'User 32', city: 'Lucknow' },
    { id: 33, name: 'User 33', city: 'Lucknow' },
    { id: 34, name: 'User 34', city: 'Lucknow' },
    { id: 35, name: 'User 35', city: 'Lucknow' },
    { id: 36, name: 'User 36', city: 'Lucknow' },
    { id: 37, name: 'User 37', city: 'Lucknow' },
    { id: 38, name: 'User 38', city: 'Lucknow' },
    { id: 39, name: 'User 39', city: 'Lucknow' },
    { id: 40, name: 'User 40', city: 'Lucknow' },
    { id: 41, name: 'User 41', city: 'Lucknow' },
    { id: 42, name: 'User 42', city: 'Lucknow' },
    { id: 43, name: 'User 43', city: 'Lucknow' },
    { id: 44, name: 'User 44', city: 'Lucknow' },
    { id: 45, name: 'User 45', city: 'Lucknow' },
    { id: 46, name: 'User 46', city: 'Lucknow' },
    { id: 47, name: 'User 47', city: 'Lucknow' },
    { id: 48, name: 'User 48', city: 'Lucknow' },
    { id: 49, name: 'User 49', city: 'Lucknow' },
    { id: 50, name: 'User 50', city: 'Lucknow' },
  ];
  getData() {
    let start = this.batchIndex * this.batchSize;
    let end = start + this.batchSize;
    const requestedData = this.mockData.slice(start, end);
    if(requestedData.length)
    this.renderData.push(...requestedData);
    this.batchIndex++;
  }

  onScroll(event: any){
    // console.log("event from scroll",event)
    const el = event.target;
    // taking 10px as threshold
    const reachedEnd = el.scrollTop + el.clientHeight >= el.scrollHeight - 10;
    if(reachedEnd) this.getData();
    console.log(reachedEnd,'reachedend')
  }
}

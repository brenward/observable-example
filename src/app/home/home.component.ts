import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs'
import {map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  private firstObsSuscription: Subscription;

  constructor() { }
  

  ngOnInit() {
    /*this.firstObsSuscription = interval(1000).subscribe(count => {
      console.log(count);
    });*/

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count == 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('Count is greater than 3'));          
        }
        count++;
      },1000);
    });

    this.firstObsSuscription = customIntervalObservable.pipe(filter((data:number) =>{
      return data> 0;
    }), map((data: number)=>{
      return 'Round: ' + (data +1);
    })).subscribe(data => {
      console.log(data);
    }, error =>{
      alert(error.message);
    },() =>{
      console.log('completed');
    });
  }

  ngOnDestroy(): void {
    this.firstObsSuscription.unsubscribe();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs'

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
        count++;
      },1000);
    });

    this.firstObsSuscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.firstObsSuscription.unsubscribe();
  }

}

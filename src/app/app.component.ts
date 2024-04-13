import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated:boolean = false;
  private activatedSub: Subscription;
  constructor(private userService:UserService) {}
  
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

  ngOnInit() {
    this.activatedSub = this.userService.activaterEmitter.subscribe((data:boolean) => {
      this.userActivated = data;
    });
  }
}

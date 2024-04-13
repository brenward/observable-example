import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({providedIn: 'root'})
export class UserService{
    activaterEmitter = new Subject<boolean>();
}
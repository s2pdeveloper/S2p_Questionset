import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { Observable, ObservableInput, ObservedValueOf, OperatorFunction, throwError } from "rxjs";
import { Subject } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next('T');
        }
      }
    });
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: "success", text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: "error", text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class FirebaseProvider {
  currentUser: User;
 
  constructor(public afd: AngularFireDatabase) { }
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return FirebaseListObservable.throw("Please insert credentials");
    } else {
      return FirebaseListObservable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "" && credentials.email === "");
        this.currentUser = new User('', '');
        observer.next(access);
        observer.complete();
      });
    }
  }
} 
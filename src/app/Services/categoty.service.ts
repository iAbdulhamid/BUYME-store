import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategotyService {

  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    return this.db.list('/Categories').valueChanges();
    // this.db.list("items")
    //   .valueChanges()
    //   .subscribe(res => { return res })
  }
}

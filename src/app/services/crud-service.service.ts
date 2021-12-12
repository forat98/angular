import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  studentsRef: AngularFireList<any>; // Reference to Student data list, its an Observable

  constructor(private db: AngularFireDatabase) {}
  GetordersDataList() {
    this.studentsRef = this.db.list('orders');
    return this.studentsRef;
  }
}

import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud-service.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  ordersData: any[] = [];
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('orders').valueChanges();
    console.log(this.items);
  }

  ngOnInit() {
    this.ordersData = [
      {
        orderID: 1,
        customerName: 'ali',
        customerAdress: 'amman',
        orderTotalAmount: 20,
      },
      {
        orderID: 2,
        customerName: 'ali',
        customerAdress: 'amman',
        orderTotalAmount: 15,
      },
      {
        orderID: 3,
        customerName: 'ahmad',
        customerAdress: 'USA',
        orderTotalAmount: 23,
      },
      {
        orderID: 4,
        customerName: 'mohammad',
        customerAdress: 'irbid',
        orderTotalAmount: 88,
      },
      {
        orderID: 5,
        customerName: 'sara',
        customerAdress: 'amman',
        orderTotalAmount: 20,
      },
      {
        orderID: 6,
        customerName: 'fahid',
        customerAdress: 'amman',
        orderTotalAmount: 100,
      },
      {
        orderID: 7,
        customerName: 'mahmoud',
        customerAdress: 'amman',
        orderTotalAmount: 25,
      },
      {
        orderID: 8,
        customerName: 'ali',
        customerAdress: 'amman',
        orderTotalAmount: 27,
      },
      {
        orderID: 9,
        customerName: 'farah',
        customerAdress: 'amman',
        orderTotalAmount: 98,
      },
    ];
  }
}

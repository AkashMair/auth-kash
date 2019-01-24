import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService } from "../services/firebase-auth.service";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface IItems{
  name:string;
  userID: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user;
  
  items: Observable<IItems[]>;
  itemCollection: AngularFirestoreCollection<IItems>


  constructor(private auth: FirebaseAuthService, private afs:AngularFirestore) 
  { this.user = this.auth.user;
    this.itemCollection = this.afs.collection<IItems>('items', 
      (ref) => ref.where('userID', '==', this.auth.user.uid).orderBy('name', 'desc')
      );
    this.items = this.itemCollection.valueChanges();
  
  }

  ngOnInit() {

  }

  logout() {
    this.auth.logout();
  }

}

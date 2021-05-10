import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export const COLLECTIONS: string[] = ['journals', 'moods', 'awards'];

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
})
export class QueryComponent implements OnInit {
  collections: string[];
  users$: Observable<any>;

  subCollection: any;

  formControl = new FormControl();

  constructor(private afs: AngularFirestore) {
    this.collections = COLLECTIONS;
  }

  ngOnInit(): void {
    this.users$ = this.afs.collection('users').valueChanges({ idField: 'id' });
  }

  querySubcollection(collection, id): void {
    console.log(`${id} - ${collection}`);
    this.afs
      .collection(`users/${id}/${collection}`)
      .valueChanges({ idField: 'id' })
      .subscribe((sub) => (this.subCollection = sub));
  }
}

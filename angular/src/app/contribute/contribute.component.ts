import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss'],
})
export class ContributeComponent implements OnInit {
  form: FormGroup;
  document = {};

  constructor(private fb: FormBuilder, private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      path: '',
      fields: this.fb.array([]),
    });

    this.form.valueChanges.subscribe((value) => {
      this.document = this.processFields(value.fields);
    });
  }

  get fields() {
    return this.form.get('fields') as FormArray;
  }

  add() {
    const field = this.fb.group({
      key: '',
      value: '',
    });
    this.fields.push(field);
  }

  remove(index: number) {
    this.fields.removeAt(index);
  }

  processFields(fields: any) {
    let doc = {};
    fields.forEach((element) => {
      doc[element.key] = element.value;
    });
    return doc;
  }

  submit() {
    const path = this.form.get('path').value;
    const doc = this.document;

    /*************** DANGER ***************/
    // this.afs.collection(path).add(doc);
    /*************** DANGER ***************/
  }
}

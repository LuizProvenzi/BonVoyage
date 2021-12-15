
import { Component, Input, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

interface Timeline {
  Id: number;
  Info: string;
  Custo: number;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  timelineCollectionRef: AngularFirestoreCollection<Timeline>;

  @Input() Id: number;
  @Input() Info: String;

  constructor(afs: AngularFirestore) { 
    this.timelineCollectionRef = afs.collection('timelines');
  }


  remover() {
    this.timelineCollectionRef.get().subscribe((snapshot) => {
      snapshot.forEach(doc => {
        if (doc.data().Id == this.Id)
            this.timelineCollectionRef.doc(doc.id.toString()).delete();
      });
    })
  }

  ngOnInit() {}

}

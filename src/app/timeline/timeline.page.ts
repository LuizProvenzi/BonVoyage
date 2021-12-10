import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

interface Timeline {
  Id: number,
  info: string
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

  timelineCollectionRef: AngularFirestoreCollection<Timeline>;
  timelines: Observable<Timeline[]>;

  NovaInfo: string;
  Timelines: string [] = [];
  
  constructor(public afAuth: AngularFireAuth, afs: AngularFirestore) {
    this.NovaInfo = "";

    afAuth.auth.signInAnonymously();
    this.timelineCollectionRef = afs.collection('timeline');
    this.timelines = this.timelineCollectionRef.valueChanges();
  }

  updateNewInfo(ni: string) {
    this.NovaInfo = ni;
  }


  removerInfo() {
    console.log("TESTE");
  }

  addInfo() {
		this.timelineCollectionRef.get().subscribe((snapshot) => {
			var NextId: number;
			NextId = 0;
            snapshot.forEach(doc => {
				console.log(NextId+"..."+doc.data().Id);
                if (NextId < doc.data().Id) {
                    NextId = doc.data().Id;
					console.log("TROCOU: "+NextId);
				}
				else
					console.log("MANTEVE: "+NextId);
            });
			NextId++;
			console.log("Adicionando nnova informação a timeline: "+this.NovaInfo);
			this.timelineCollectionRef.add({ Id: NextId, info: this.NovaInfo });
			this.NovaInfo = "";
        });

	}

  ngOnInit() {
  }

}
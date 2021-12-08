
import { Component, Input, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

interface Veiculo {
  Id: number;
  Placa: string;
  Odometro: number;
  OdometroOleo: number;
  OdometroCheckup: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  veiculoCollectionRef: AngularFirestoreCollection<Veiculo>;

  @Input() Id: number;
  @Input() Placa: String;
  @Input() Odometro: number;
  @Input() OdometroOleo: number;
  @Input() OdometroCheckup: number;

  constructor(afs: AngularFirestore) { 
    this.veiculoCollectionRef = afs.collection('veiculos');
  }

  updateFirebaseOdometro() {
    this.veiculoCollectionRef.get().subscribe((snapshot) => {
      snapshot.forEach(doc => {
        if (doc.data().Id == this.Id)
            this.veiculoCollectionRef.doc(doc.id.toString()).update({ Odometro: this.Odometro});
      });
    })
  }

  updateFirebaseOdometroOleo() {
    this.veiculoCollectionRef.get().subscribe((snapshot) => {
      snapshot.forEach(doc => {
        if (doc.data().Id == this.Id)
            this.veiculoCollectionRef.doc(doc.id.toString()).update({ OdometroOleo: this.OdometroOleo});
      });
    })
  }

  updateFirebaseOdometroCheckup() {
    this.veiculoCollectionRef.get().subscribe((snapshot) => {
      snapshot.forEach(doc => {
        if (doc.data().Id == this.Id)
            this.veiculoCollectionRef.doc(doc.id.toString()).update({ OdometroCheckup: this.OdometroCheckup});
      });
    })
  }

  remover() {
    this.veiculoCollectionRef.get().subscribe((snapshot) => {
      snapshot.forEach(doc => {
        if (doc.data().Id == this.Id)
            this.veiculoCollectionRef.doc(doc.id.toString()).delete();
      });
    })
  }

  incrementOdometro() {
    this.Odometro++;
    this.updateFirebaseOdometro();
  }

  decrementOdometro() {
    if (this.Odometro > 0) {
        this.Odometro--;
        this.updateFirebaseOdometro();
    }
}
  
incrementOdometroOleo() {
  this.OdometroOleo++;
  this.updateFirebaseOdometroOleo();
}

decrementOdometroOleo() {
  if (this.OdometroOleo > 0) {
      this.OdometroOleo--;
      this.updateFirebaseOdometroOleo();
  }
}

incrementOdometroCheckup() {
  this.OdometroCheckup++;
  this.updateFirebaseOdometroCheckup();
}

decrementOdometroCheckup() {
  if (this.OdometroCheckup > 0) {
      this.OdometroCheckup--;
      this.updateFirebaseOdometroCheckup();
  }
}

  ngOnInit() {}

}

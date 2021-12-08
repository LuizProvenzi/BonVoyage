import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

interface Veiculo {
  Id: number,
  Placa: string,
  Odometro: number,
  OdometroOleo: number,
  OdometroCheckup: number
}

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.page.html',
  styleUrls: ['./veiculos.page.scss'],
})
export class VeiculosPage implements OnInit {

  veiculoCollectionRef: AngularFirestoreCollection<Veiculo>;
  veiculos: Observable<Veiculo[]>;

  NovoVeiculo: string;
  Veiculos: string [] = [];
  
  constructor(public afAuth: AngularFireAuth, afs: AngularFirestore) {
    this.NovoVeiculo = "";

    afAuth.auth.signInAnonymously();
    this.veiculoCollectionRef = afs.collection('veiculos');
    this.veiculos = this.veiculoCollectionRef.valueChanges();
  }

  updateNewVeiculo(nv: string) {
    this.NovoVeiculo = nv;
  }


  remover() {
    console.log("TESTE");
  }

  addVeiculo() {
		this.veiculoCollectionRef.get().subscribe((snapshot) => {
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
			console.log("Adicionando novo veiculo: "+this.NovoVeiculo);
			this.veiculoCollectionRef.add({ Id: NextId, Placa: this.NovoVeiculo, Odometro: 50000, OdometroCheckup: 50000, OdometroOleo: 50000 });
			this.NovoVeiculo = "";
        });

	}

  ngOnInit() {
  }

}
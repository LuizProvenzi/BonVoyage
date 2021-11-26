import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

interface Player {
	Id: number,  
	Name: string,
	Score: number
}

@Component({
	selector: 'app-jogar',
	templateUrl: './jogar.page.html',
	styleUrls: ['./jogar.page.scss'],
})
export class JogarPage implements OnInit {

    playerCollectionRef: AngularFirestoreCollection<Player>;
	players: Observable<Player[]>;

	NovoJogador: string;
	Jogadores: string[] = [];

	constructor(public afAuth: AngularFireAuth, afs: AngularFirestore) {
		this.NovoJogador = "";

		afAuth.auth.signInAnonymously();
		this.playerCollectionRef = afs.collection('players'); 
		this.players = this.playerCollectionRef.valueChanges();
	}
	
	updateNewPlayer(np: string) {
		this.NovoJogador = np;
	}

	remover() {
		console.log("TESTE");
	}

	addPlayer() {
		this.playerCollectionRef.get().subscribe((snapshot) => {
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
			console.log("Adicionando novo jogador: "+this.NovoJogador);
			this.playerCollectionRef.add({ Id: NextId, Name: this.NovoJogador, Score: 0 });
			this.NovoJogador = "";
        });

	}

  	ngOnInit() {}

}

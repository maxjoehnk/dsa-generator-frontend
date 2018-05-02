import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { DSA5Level } from '../../models/level';

@Component({
	selector: 'dsa-character-creation',
	templateUrl: './character-creation.component.html',
	styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent {

	remaining = 0;
	levels$: Observable<DSA5Level[]>;
	level: DSA5Level;

	constructor(private firestore: AngularFirestore) {
		this.levels$ = this.firestore.collection<DSA5Level>('games/dsa5/levels')
			.valueChanges()
			.map(levels => levels.sort((a, b) => a.adventurePoints - b.adventurePoints));
	}

	recalculate() {
		this.remaining = this.level.adventurePoints;
	}
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { DSA5Level } from '../../models/level';
import { DSA5Race } from '../../models/race';

@Component({
	selector: 'dsa-character-creation',
	templateUrl: './character-creation.component.html',
	styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent {

	remaining = 0;
	levels$: Observable<DSA5Level[]>;
	races$: Observable<DSA5Race[]>;

	level: DSA5Level;
	race: DSA5Race;

	constructor(private firestore: AngularFirestore) {
		this.levels$ = this.firestore.collection<DSA5Level>('games/dsa5/levels')
			.valueChanges()
			.map(levels => levels.sort((a, b) => a.adventurePoints - b.adventurePoints));
		this.races$ = this.firestore.collection<DSA5Race>('games/dsa5/races')
			.valueChanges();
	}

	recalculate() {
		let remaining = this.level.adventurePoints;
		if (this.race) {
			remaining -= this.race.cost;
		}
		this.remaining = remaining;
	}
}

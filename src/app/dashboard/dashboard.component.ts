import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Character } from '../models/character';
import { Adventure } from '../models/adventure';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
	selector: 'dsa-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

	characters$: Observable<Character[]>;
	adventures$: Observable<Adventure[]>;

	constructor(private firestore: AngularFirestore,
				private auth: AngularFireAuth) {
		this.characters$ = this.auth
			.authState
			.filter(user => user !== null)
			.switchMap(user => this.firestore.collection<Character>(`/users/${user.uid}/characters`).valueChanges());
		this.adventures$ = Observable.of([]);
	}
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: 'pp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(private auth: AngularFireAuth) {
		this.auth.authState.subscribe(user => console.log(user && user.uid));
	}

	async ngOnInit() {
		try {
			await this.auth.auth.setPersistence('local');
			// if (!this.auth.auth.currentUser) {
			// 	await this.auth.auth.signInAnonymously();
			// }
		}catch (err) {
			console.error(err);
		}
	}
}

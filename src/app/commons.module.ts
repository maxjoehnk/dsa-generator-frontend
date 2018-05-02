import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatDividerModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatTabsModule,
	MatToolbarModule
} from '@angular/material';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		AngularFirestoreModule,
		AngularFireAuthModule,
		MatListModule,
		MatButtonModule,
		MatToolbarModule,
		MatDividerModule,
		MatTabsModule,
		MatInputModule,
		MatIconModule
	],
	declarations: []
})
export class CommonsModule {
}

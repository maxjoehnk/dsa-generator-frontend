import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatDividerModule,
	MatIconModule,
	MatInputModule,
	MatListModule, MatSelectModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule
} from '@angular/material';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		SharedModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		MatListModule,
		MatButtonModule,
		MatToolbarModule,
		MatDividerModule,
		MatTabsModule,
		MatInputModule,
		MatIconModule,
		MatTooltipModule,
		MatSelectModule
	],
	declarations: []
})
export class CommonsModule {
}

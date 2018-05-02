import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { CommonsModule } from './commons.module';
import { CharactersModule } from './characters/characters.module';
import { AdventuresModule } from './adventures/adventures.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function loadCharacters() {
	return CharactersModule;
}

export function loadAdventures() {
	return AdventuresModule;
}

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent
	},
	{
		path: 'characters',
		loadChildren: loadCharacters
	},
	{
		path: 'adventures',
		loadChildren: loadAdventures
	}
];

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		AngularFireModule.initializeApp(environment.firebase),
		CommonsModule,
		CharactersModule,
		AdventuresModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

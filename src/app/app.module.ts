import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
	{
		path: 'characters',
		loadChildren: './characters/characters.module#CharactersModule'
	},
	{
		path: 'adventures',
		loadChildren: './adventures/adventures.module#AdventuresModule'
	}
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		AngularFireModule.initializeApp(environment.firebase),
		DashboardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

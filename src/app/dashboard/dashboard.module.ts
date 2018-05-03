import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CommonsModule } from '../commons.module';
import { RouterModule } from '@angular/router';

const routes = [{
	path: '',
	component: DashboardComponent
}];

@NgModule({
	imports: [
		CommonModule,
		CommonsModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		DashboardComponent,
		AdventureListComponent,
		CharacterListComponent
	]
})
export class DashboardModule {
}

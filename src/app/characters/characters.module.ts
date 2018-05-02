import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonsModule } from '../commons.module';

const routes: Routes = [
	{
		path: ':id',
		component: CharacterViewComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		CommonsModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		CharacterListComponent,
		CharacterViewComponent
	],
	exports: [
		CharacterListComponent
	]
})
export class CharactersModule {
}

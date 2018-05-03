import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterViewComponent } from './character-view/character-view.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonsModule } from '../commons.module';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: 'new',
		component: CharacterCreationComponent
	},
	{
		path: ':id',
		component: CharacterViewComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		CommonsModule,
		RouterModule.forChild(routes),
		FormsModule
	],
	declarations: [
		CharacterViewComponent,
		CharacterCreationComponent
	]
})
export class CharactersModule {
}

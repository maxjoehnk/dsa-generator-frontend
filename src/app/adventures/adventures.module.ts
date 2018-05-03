import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureViewComponent } from './adventure-view/adventure-view.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonsModule } from '../commons.module';

const routes: Routes = [
	{
		path: ':id',
		component: AdventureViewComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		CommonsModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		AdventureViewComponent
	]
})
export class AdventuresModule {
}

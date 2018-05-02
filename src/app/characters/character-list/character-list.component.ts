import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../models/character';

@Component({
	selector: 'dsa-character-list',
	templateUrl: './character-list.component.html',
	styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {

	@Input()
	characters: Character[];

	constructor() {
	}

	ngOnInit() {
	}

}

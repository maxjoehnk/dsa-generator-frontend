import { Component, Input, OnInit } from '@angular/core';
import { Adventure } from '../../models/adventure';

@Component({
	selector: 'dsa-adventure-list',
	templateUrl: './adventure-list.component.html',
	styleUrls: ['./adventure-list.component.sass']
})
export class AdventureListComponent implements OnInit {

	@Input()
	adventures: Adventure[];

	constructor() {
	}

	ngOnInit() {
	}

}

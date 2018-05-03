import { Component, Input, OnInit } from '@angular/core';
import { DSA5Adventure } from '../../models/adventure';

@Component({
	selector: 'dsa-adventure-list',
	templateUrl: './adventure-list.component.html',
	styleUrls: ['./adventure-list.component.sass']
})
export class AdventureListComponent implements OnInit {

	@Input()
	adventures: DSA5Adventure[];

	constructor() {
	}

	ngOnInit() {
	}

}

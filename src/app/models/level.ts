export interface DSA5Level {
	adventurePoints: number;
	id: string;
	limits: {
		attribute: number;
		attributeValue: number;
		combatTechnique: number;
		foreignCharts: number;
		numberOfSpells: number;
		skillValue: number;
	};
	name: {
		[lang: string]: string;
	};
}

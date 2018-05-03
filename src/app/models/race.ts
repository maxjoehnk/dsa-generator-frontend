export interface DSA5Race {
	id: string;
	name: {
		[lang: string]: string;
	};
	cost: number;
	base: {
		values: {
			lifePoints: number;
			spirit: number;
			toughness: number;
			movement: number;
		};
		advantages: string[];
	};
	adjustments: {
		stats: string[];
		value: number;
	}[];
	recommendations: {
		advantages: string[];
		disadvantages: string[];
	};
	common: {
		cultures: string[];
		advantages: string[];
		disadvantages: string[];
	};
	uncommon: {
		advantages: string[];
		disadvantages: string[];
	};
}

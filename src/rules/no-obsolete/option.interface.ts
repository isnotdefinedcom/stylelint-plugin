export interface Options
{
	atRules : AtRule[];
	properties : Property[];
}

export interface AtRule
{
	name :
	{
		search : string;
		replace ?: string;
	}
}

export interface Property
{
	name :
	{
		search : string;
		replace ?: string;
	},
	value ?:
	{
		search : string;
		replace ?: string;
	}
}

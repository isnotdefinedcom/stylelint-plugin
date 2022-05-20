export interface Options
{
	atRules : AtRule[];
	properties : Property[];
}

interface AtRule
{
	name :
	{
		search : string;
		replace ?: string;
	}
}

interface Property
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

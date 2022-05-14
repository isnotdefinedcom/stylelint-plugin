export interface Options
{
	obsoletes : Obsolete[];
}

interface Obsolete
{
	property :
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

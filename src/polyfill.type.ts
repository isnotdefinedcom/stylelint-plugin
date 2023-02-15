import { Rule } from 'stylelint';

export type RuleContext =
{
	fix ?: boolean;
	newline ?: string;
};

export type Plugin =
{
	ruleName : string;
	rule : Rule;
}

import { Root } from 'postcss';
import { Rule, RuleContext, PostcssResult, createPlugin, utils } from 'stylelint';
import { defaultOptions } from './option';
import { Options } from './option.interface';
import { wording } from '../wording';

const ruleName : string = '@isnotdefined/no-disable';

function validateOptions(result : PostcssResult, options : Options)
{
	return utils.validateOptions(result, ruleName,
	{
		actual: options,
		// @ts-ignore
		possible:
		{
			commands: value => value
		}
	});
}

function rule(primaryOptions : Options, secondaryOptions : Options, context : RuleContext)
{
	const options : Options = { ...defaultOptions, ...primaryOptions };

	return (root : Root, result : PostcssResult) =>
	{
		if (validateOptions(result, options))
		{
			root.walkComments(comment =>
			{
				if (options.commands.includes(comment.text))
				{
					utils.report(
					{
						message: wording.unexpected + ' "' + comment.text + '" ' + wording.comment,
						node: comment,
						result,
						ruleName,
						word: comment.text
					});
					if (context.fix)
					{
						comment.remove();
					}
				}
			});
		}
	};
}

export default createPlugin(ruleName, rule as Rule);

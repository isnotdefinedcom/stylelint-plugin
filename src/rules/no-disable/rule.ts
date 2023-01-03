import { Root } from 'postcss';
import { Rule, PostcssResult, createPlugin, utils } from 'stylelint';
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

function rule(primaryOptions : Options)
{
	const options : Options = { ...defaultOptions, ...primaryOptions };

	return (root : Root, result : PostcssResult) =>
	{
		if (validateOptions(result, options))
		{
			root.walkComments(comment =>
			{
				if (options.commands.includes(comment.text.split(' ')[0]))
				{
					utils.report(
					{
						message: wording.unexpected + ' "' + comment.text + '" ' + wording.comment,
						node: comment,
						result,
						ruleName,
						word: comment.text
					});
				}
			});
		}
	};
}

export default createPlugin(ruleName, rule as unknown as Rule);

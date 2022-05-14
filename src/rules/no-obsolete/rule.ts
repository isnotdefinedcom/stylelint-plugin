import { Root } from 'postcss';
import { createPlugin, PostcssResult, utils } from 'stylelint';
import { defaultOptions } from './option.js';
import { Options } from './option.interface.js';
import { wording } from '../wording.js';

const ruleName : string = '@isnotdefined/no-obsolete';

function validateOptions(result : PostcssResult, options : Options)
{
	return utils.validateOptions(result, ruleName,
	{
		actual: options,
		// @ts-ignore
		possible:
		{
			obsoletes: value => value
		}
	});
}

function rule(primaryOptions : Options, secondaryOptions : Options, context : { fix : boolean; })
{
	const options : Options = { ...defaultOptions, ...primaryOptions };

	return (root : Root, result : PostcssResult) =>
	{
		if (validateOptions(result, options))
		{
			options.obsoletes?.map(obsolete =>
			{
				root.walkDecls(obsolete.property.search, decl =>
				{
					if (obsolete.property.replace)
					{
						utils.report(
						{
							message: wording.expected + ' "' + obsolete.property.search + '" ' + wording.property + ' ' + wording.to_be + ' "' + obsolete.property.replace + '"',
							node: decl,
							result,
							ruleName,
							word: decl.prop
						});

						if (context.fix)
						{
							decl.prop = obsolete.property.replace;
						}
					}
					else if (obsolete.value.search && obsolete.value.replace && decl.value === obsolete.value.search)
					{
						utils.report(
						{
							message: wording.expected + ' "' + obsolete.property.search + '" ' + wording.value + ' "' + obsolete.value.search + '" ' + wording.to_be + ' "' + obsolete.value.replace + '"',
							node: decl,
							result,
							ruleName,
							word: decl.value
						});

						if (context.fix)
						{
							decl.value = obsolete.value.replace;
						}
					}
				});
			});
		}
	};
}

export default createPlugin(ruleName, rule);

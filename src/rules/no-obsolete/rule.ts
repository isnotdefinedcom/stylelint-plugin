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
			properties: value => value
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
			Object.keys(options.properties)?.map(property =>
			{
				root.walkDecls(property, decl =>
				{
					const propertyFixed : string = options.properties[property];

					utils.report(
					{
						message: wording.expected + ' "' + property + '" ' + wording.property + ' ' + wording.to_be + ' "' + propertyFixed + '"',
						node: decl,
						result,
						ruleName,
						word: decl.value
					});

					if (context.fix)
					{
						decl.prop = propertyFixed;
					}
				});
			});
		}
	};
}

export default createPlugin(ruleName, rule);

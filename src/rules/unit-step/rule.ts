import { Root } from 'postcss';
import { parse } from 'postcss-values-parser';
import { createPlugin, PostcssResult, utils } from 'stylelint';
import { defaultOptions } from './option.js';
import { Options } from './option.interface.js';
import { wording } from '../wording.js';

const ruleName : string = '@isnotdefined/unit-step';

function validateOptions(result : PostcssResult, options : Options)
{
	return utils.validateOptions(result, ruleName,
	{
		actual: options,
		// @ts-ignore
		possible:
		{
			step: value => value > 0,
			units: value => defaultOptions.units.includes(value),
			properties: value => defaultOptions.properties.includes(value)
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
			options.properties?.map(property =>
			{
				root.walkDecls(property, decl =>
				{
					parse(decl.value).walkNumerics(node =>
					{
						if (options.units.includes(node.unit) && Number(node.value) % options.step > 0)
						{
							const unitFixed : string = Math.round(Number(node.value) / options.step) * options.step + node.unit;

							utils.report(
							{
								message: wording.expected + ' "' + property + '" ' + wording.value + ' ' + node.value + node.unit + ' ' + wording.to_be + ' ' + unitFixed,
								node: decl,
								result,
								ruleName,
								word: decl.value
							});

							if (context.fix)
							{
								decl.value = unitFixed;
							}
						}
					});
				});
			});
		}
	};
}

export default createPlugin(ruleName, rule);

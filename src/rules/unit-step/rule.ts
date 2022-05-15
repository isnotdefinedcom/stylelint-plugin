import { Root } from 'postcss';
import { ContainerBase, parse } from 'postcss-values-parser';
import { createPlugin, PluginContext, PostcssResult, utils } from 'stylelint';
import { defaultOptions } from './option';
import { Options } from './option.interface';
import { wording } from '../wording';

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

function rule(primaryOptions : Options, secondaryOptions : Options, context : PluginContext)
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
					const nodes : ContainerBase = parse(decl.value);

					nodes.walkNumerics(node =>
					{
						if (options.units.includes(node.unit) && Number(node.value) % options.step > 0)
						{
							const valueFixed : number = Math.round(Number(node.value) / options.step) * options.step;

							utils.report(
							{
								message: wording.expected + ' "' + property + '" ' + wording.unit + ' "' + node.value + node.unit + '" ' + wording.to_be + ' "' + valueFixed + node.unit + '"',
								node: decl,
								result,
								ruleName,
								word: decl.value
							});
							node.value = valueFixed.toString();
						}
					});

					if (context.fix)
					{
						decl.value = nodes.toString();
					}
				});
			});
		}
	};
}

export default createPlugin(ruleName, rule);

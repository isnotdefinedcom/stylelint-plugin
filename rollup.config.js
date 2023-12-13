import del from 'rollup-plugin-delete';
import ts from 'rollup-plugin-ts';
import copy from 'rollup-plugin-copy';
import PACKAGE from './package.json' assert { type: 'json' };

export default
{
	input: 'src/index.ts',
	output:
	[
		{
			file: 'build/' + PACKAGE.main,
			format: 'cjs'
		},
		{
			file: 'build/' + PACKAGE.module,
			format: 'esm'
		}
	],
	plugins:
	[
		del(
		{
			targets: 'build'
		}),
		ts(),
		copy(
		{
			targets:
			[
				{
					src: 'package.json',
					dest: 'build'
				},
				{
					src: 'README.md',
					dest: 'build'
				}
			]
		})
	]
};

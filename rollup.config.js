import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete'
import copy from 'rollup-plugin-copy'

export default
{
	input: 'src/index.ts',
	output:
	{
		dir: 'build'
	},
	plugins:
	[
		del(
		{
			targets: 'build'
		}),
		typescript(
		{
			module: 'esnext',
			include:
			[
				'src/**/**'
			]
		}),
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

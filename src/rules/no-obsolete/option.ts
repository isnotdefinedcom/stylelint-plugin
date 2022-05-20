import { Options } from './option.interface';

export const defaultOptions : Options =
{
	atRules:
	[
		{
			name:
			{
				search: 'document'
			}
		},
		{
			name:
			{
				search: 'viewport'
			}
		}
	],
	properties:
	[
		{
			name:
			{
				search: 'box-sizing'
			},
			value:
			{
				search: 'padding-box'
			}
		},
		{
			name:
			{
				search: 'clip',
				replace: 'clip-path'
			}
		},
		{
			name:
			{
				search: 'grid-gap',
				replace: 'gap'
			}
		},
		{
			name:
			{
				search: 'grid-column-gap',
				replace: 'column-gap'
			}
		},
		{
			name:
			{
				search: 'grid-row-gap',
				replace: 'row-gap'
			}
		},
		{
			name:
			{
				search: 'ime-mode'
			}
		},
		{
			name:
			{
				search: 'scroll-snap-coordinate'
			}
		},
		{
			name:
			{
				search: 'scroll-snap-destination'
			}
		},
		{
			name:
			{
				search: 'scroll-snap-type-x'
			}
		},
		{
			name:
			{
				search: 'scroll-snap-type-y'
			}
		},
		{
			name:
			{
				search: 'scroll-snap-points-x'
			}
		},
		{
			name:
			{
				search: 'scroll-snap-points-y'
			}
		},
		{
			name:
			{
				search: 'text-decoration'
			},
			value:
			{
				search: 'blink'
			}
		},
		{
			name:
			{
				search: 'word-break'
			},
			value:
			{
				search: 'break-word',
				replace: 'break-all'
			}
		},
		{
			name:
			{
				search: 'zoom'
			}
		}
	]
};

import { Options } from './option.interface';

export const defaultOptions : Options =
{
	atRules:
	[
		{
			name:
			{
				search: 'apply'
			}
		},
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
				search: 'box-align'
			}
		},
		{
			name:
			{
				search: 'box-direction',
				replace: 'flex-direction'
			}
		},
		{
			name:
			{
				search: 'box-flex'
			}
		},
		{
			name:
			{
				search: 'box-flex-group'
			}
		},
		{
			name:
			{
				search: 'box-lines'
			}
		},
		{
			name:
			{
				search: 'box-ordinal-group',
				replace: 'order'
			}
		},
		{
			name:
			{
				search: 'box-orient'
			}
		},
		{
			name:
			{
				search: 'box-pack'
			}
		},
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
					search: 'grid-column-gap',
					replace: 'column-gap'
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
				search: 'grid-row-gap',
				replace: 'row-gap'
			}
		},
		{
			name:
			{
				search: 'image-orientation'
			},
			value:
			{
				search: 'flip'
			}
		},
		{
			name:
			{
				search: 'image-rendering'
			},
			value:
			{
				search: 'optimizeQuality',
				replace: 'smooth'
			}
		},
		{
			name:
			{
				search: 'image-rendering'
			},
			value:
			{
				search: 'optimizeSpeed',
				replace: 'pixelated'
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
				search: 'page-break-after',
				replace: 'break-after'
			}
		},
		{
			name:
			{
				search: 'page-break-before',
				replace: 'break-before'
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
				search: 'text-decoration-line'
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
				search: 'user-modify'
			}
		}
	]
};

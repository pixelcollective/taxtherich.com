// @react
import React from 'react'

// @styled
import styled from 'styled-components'

// @polished
import { darken, lighten } from 'polished'

/**
 * Exports
 */
const StyledSVG = styled.svg`
	* { transition: all 0.2s ease-in-out; }
	.st0 { fill: ${props => lighten(0.2, props.color)}; }
	.st1 { fill: ${props => props.color}; }
	.st2 { fill: ${props => darken(0.2, props.color)}; }
`

export default StyledSVG
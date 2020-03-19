import styled, { css } from 'styled-components';

const Button = styled.button`
	background: transparent;
	color: ${props => props.theme.primary};
	margin: .5em;
	padding: 0.75em 2em;
	cursor: pointer;
	border: 1px solid ${props => props.theme.primary};
	border-radius: 4px;
	transition: all 0.1s;

	${props => props.primary &&
		css`
			background: ${props => props.theme.primary};
			color: white;
			border: none;
		`};
	}

	${props => props.alt &&
		css`
			background: ${props => props.theme.alt};
			color: white;
			border: none;
		`};
	}
`

export default Button;
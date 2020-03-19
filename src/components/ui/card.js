import styled, { css } from 'styled-components';

const Card = styled.section`
	background: ${props => props.theme.bg2};
	color: ${props => props.theme.text};
	margin: .5em;
	padding: 0.75em 2em;
  width: ${props => props.width || '200px'};
  ${'' /* box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); */}
	box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
`

export default Card;
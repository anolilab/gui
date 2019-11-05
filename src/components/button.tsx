import * as React from 'react'
import styled from 'styled-components';

const SVG = styled.svg`
  margin: 0 auto 10px auto;
  display: block;
`;

type ButtonProps = {
  currentText: string;
};

export default class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <SVG width="260" height="60">
        <g>
          <rect fill="#7f003f" id="canvas_background" height="60" width="262" y="-1" x="-1"/>
        </g>
        <g>
          <text fontStyle="normal" fontWeight="bold" stroke="#000" textAnchor="start" fontFamily="Helvetica, Arial, sans-serif" fontSize="24" id="svg_2" y="38" x="104.227378" strokeOpacity="null" strokeWidth="0" fill="#ffffff">
            {this.props.currentText}
          </text>
        </g>
      </SVG>
    );
  }
}

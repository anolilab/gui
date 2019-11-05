import * as React from 'react'
import styled from 'styled-components';
import Button from './button';
import { Container, Row, Col, GridThemeProvider } from 'styled-bootstrap-grid';

const Section = styled.section`
  width: 100%;
  height: 330px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0 0 50px 0;
`;

const Pre = styled.pre`
  color: black;
  white-space: pre;
  text-align: left;
  font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  counter-reset: line 0;
  min-width: 480px;
  max-width: 580px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 4px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 6px;
  transition: height 0.15s ease 0s;
`;

const Input = styled.input`

`;

type EditorState = {
    currentText: string
}

export default class Editor extends React.Component<{}, EditorState> {
  constructor(props) {
      super(props);

      this.state = {
        currentText: 'test'
      };
  }

  setText = (event) => {
    this.setState({ currentText: event.target.value });
  };

  render() {
    return (
      <Section>
        <GridThemeProvider>
          <Container>
            <Row>
              <Col col sm="12">
                <Button currentText={ this.state.currentText } />
              </Col>
              <Col col sm="12">
                <Pre>
                  {`
  {
    "text":
  }
                  `}
                </Pre>
                <Input type="text" onChange={ this.setText } value={ this.state.currentText } />
              </Col>
            </Row>
          </Container>
        </GridThemeProvider>
      </Section>
    );
  }
}

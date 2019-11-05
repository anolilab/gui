import React, { ChangeEvent, ReactPortal } from 'react'
import styled, {StyledComponent} from 'styled-components';
import writeGood from 'write-good';
import { Col, Row } from 'styled-bootstrap-grid';

type ComponentSwitcherProps = {
  defaultText: string,
  element: ReactPortal | string,
  textElement: 'input' | 'textarea',
};

type ComponentSwitcherState = {
  elementIsVisible: boolean,
  text: string,
};

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
`;

export default class ComponentSwitcher extends React.Component<ComponentSwitcherProps, ComponentSwitcherState> {
  private _node?: HTMLDivElement | null;

  constructor(props: ComponentSwitcherProps) {
    super(props);

    this.state = {
      text: props.defaultText,
      elementIsVisible: true,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentWillMount = () => {
    document.addEventListener('click', this.handleOutsideClick, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleOutsideClick, false);
  };

  public handleClick = (): void => {
    this.setState({
      elementIsVisible: false,
    });
  };

  public handleOutsideClick(event: MouseEvent): void {
    // @ts-ignore
    if (this._node.contains(event.target)) {
      return;
    }

    this.setState({
      elementIsVisible: true,
    });
  }

  setText = (event: ChangeEvent) => {
    // @ts-ignore
    this.setState({ text: event.target.value });
  };

  render() {
    const TextElementList: { input: StyledComponent<'input', any, {}, never> } = {
      input: Input
    };
    const Element: any = this.props.element;
    // @ts-ignore
    const TextElement = TextElementList[this.props.textElement];
    const suggestions = writeGood(this.state.text);

    let suggestionsText = '';

    suggestions.forEach((data: { reason: string }) => {
      suggestionsText += data.reason + "\n\n";
    });

    const { text } = this.state;

    return (
      <div ref={ node => this._node = node }>
        <Row>
          <Col sm={12} onClick={ this.handleClick }>
            <Element style={{
              display: (this.state.elementIsVisible ? 'block' : 'none')
            }}>
              { text }
            </Element>

            <TextElement
              onChange={ this.setText }
              value={ text }
              style={{ display: (! this.state.elementIsVisible ? 'block' : 'none') }}
            />

            <div>
              { suggestionsText }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

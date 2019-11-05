import * as React from 'react'
import shieldsBadgeData from 'shields-badge-data'
import styled from 'styled-components';
import { Col, Row } from 'styled-bootstrap-grid';
import ReactDropdown from 'react-dropdown';
import ShieldsBadge, { ShieldsBadgeStyle } from './shields-badge';

type ShieldsBadgesState = {
  select: ShieldsBadgeStyle
}

export default class ShieldsBadges extends React.Component<{}, ShieldsBadgesState> {
  constructor(props) {
    super(props);

    this.state = {
      select: 'flat'
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect = (option) => {
    this.setState({
      select: option
    });
  };

  render() {
    const { title, image, link } = shieldsBadgeData(
      'travisCi',
      {
        userRepo: 'foo/bar',
        branch: 'master'
      },
      {
        rootImageUrl : new URL('https://img.shields.io/'),
        format: 'svg',
        urlParams: {
          style: 'for-the-badge'
        }
      }
    );
    const options = [
      'lastic',
      'flat',
      'flat-square',
      'for-the-badge',
      'popout',
      'popout-square',
      'social'
    ];
    const defaultOption = options[3];

    return (
      <Row>
        <Col sm="12">
          <Col sm="6">
            <ReactDropdown options={ options } onChange={ this.onSelect } value={ defaultOption } placeholder="Select an option" />
          </Col>
          <ShieldsBadge service='travisCi' repo='foo/abr' style={ this.state.select }/>
        </Col>
      </Row>
    );
  }
}

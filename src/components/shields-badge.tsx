import * as React from 'react'
import shieldsBadgeData, { BadgeName } from 'shields-badge-data'

export type ShieldsBadgeStyle = 'lastic' | 'flat' | 'flat-square' | 'for-the-badge' | 'popout' | 'popout-square' | 'social';

type ShieldsBadgeProp  = {
  service: BadgeName,
  repo: string
  branch?: string,
  style?: ShieldsBadgeStyle
};

export default class ShieldsBadge extends React.Component<ShieldsBadgeProp> {
  static defaultProps = {
    style: 'flat'
  };

  render() {
    const { service, repo, branch, style } = this.props;
    let badgeArgs: Record<string, string> = {
      userRepo: repo,
    };

    if (branch !== undefined) {
      badgeArgs['branch'] = branch;
    }

    const { image, title } = shieldsBadgeData(
      service,
      badgeArgs,
      {
        rootImageUrl : new URL('https://img.shields.io/'),
        format: 'svg',
        urlParams: {
          style
        }
      }
    );

    return (
      <img src={image.href} alt={title} />
    );
  }
}

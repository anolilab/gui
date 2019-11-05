import * as React from 'react'
import TurndownService from 'turndown';

type MarkdownPreviewProps = {
  htmlText: string
};

export default class MarkdownPreview extends React.Component<MarkdownPreviewProps> {
  render() {
    const turndownService = new TurndownService({
      codeBlockStyle: 'fenced',
      linkStyle: 'referenced'
    });
    const markdown = turndownService.turndown(this.props.htmlText);

    return (
      {markdown}
    );
  }
}

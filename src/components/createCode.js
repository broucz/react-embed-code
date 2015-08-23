const container = {
  padding: '16px',
  overflow: 'auto',
  lineHeight: '1.45',
  backgroundColor: '#f7f7f7',
  borderRadius: '3px'
};

const content = `
.content {
  color: #333;
}
.content pre{
  margin: 0;
}
.content .hljs-keyword {
  color: #a71d5d;
}
.content .hljs-string {
  color: #183691;
}
.content .hljs-class .hljs-title {
  color: #795da3;
}
.content .xml .hljs-tag {
  color: #a71d5d;
}
.content .xml .hljs-tag .hljs-title,
.content .xml .hljs-tag .hljs-attribute,
.content .xml .hljs-tag .hljs-value {
  color: #333;
}
`;

export default function createCode(React, parser) {
  const { Component, PropTypes } = React;

  class Code extends Component {
    render() {
      return (
        <div style={{...container}}>
          <style>{content}</style>
          <div
            className="content"
            dangerouslySetInnerHTML={{__html: parser(this.props.embed)}} />
        </div>
      );
    }
  }

  Code.propTypes = {
    embed: PropTypes.string.isRequired
  };

  return Code;
}

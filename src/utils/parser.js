import Remarkable from 'remarkable';
import hljs from 'highlight.js';

const remarkableInstance = new Remarkable({
  highlight: (str) => {
    try {
      return hljs.highlight('javascript', str).value;
    } catch(err) {
      console.log(err);
    }
  }
});

function decorateString(str) {
  return '```\n' + str + '```';
}

function renderFromMarkdown(md) {
  return remarkableInstance.render(md);
}

export default function parser(str) {
  return renderFromMarkdown(decorateString(str)).trim();
}

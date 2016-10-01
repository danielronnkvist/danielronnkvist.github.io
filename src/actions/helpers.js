import marked from 'marked';

export const requireProject = (name) => {
  var options = {
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  };
  marked.setOptions(options);

  var markdown = require.context('./../data/', true, /\.md$/)(name);
  var data = markdown.split('---');
  var attributes = {};

  if(data.length > 2) {
    attributes = data[1].split('\n').reduce((list, attr) => {
      attr = attr.split(':')
      if(attr.length === 2) {
        list[attr[0]] = attr[1].replace(' ', '');
      }
      return list;
    }, {});
    markdown = data[2];
  }

  return {
    attributes,
    id: name,
    html: marked(markdown)
  };
}

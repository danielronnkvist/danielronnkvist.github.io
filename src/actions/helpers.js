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

export const animateScrollTo = (scrollDuration) => {
  var cosParameter = window.scrollY / 2;
  var scrollCount = 0;
  var oldTimestamp = performance.now();
  function step (newTimestamp) {
    scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) {
      window.scrollTo(0, 0);
    }
    if (window.scrollY === 0) return;

    window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

const browserslist = require('browserslist');

// Your CSS/JS build tool code
function process(source, opts) {
  const browsers = browserslist(opts.overrideBrowserslist, {
    stats: opts.stats,
    path: opts.file,
    env: opts.env
  });
  // Your code to add features for selected browsers

  console.log(browsers);
}

process(undefined, {});

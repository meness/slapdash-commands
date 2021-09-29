const { src, dest } = require('gulp');
const exec = require('gulp-exec');

function publishToNpm() {
  return src('./package.json').pipe(dest('./dist')).pipe(exec('cd ./dist && npm pack'));
}

exports.publish = publishToNpm;

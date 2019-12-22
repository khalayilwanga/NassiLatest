const postcss = require("gulp-postcss");
const gulp = require("gulp");
const autoprefixer = require("autoprefixer");

const { watch } = gulp;

function css() {
  const plugin = [autoprefixer()];
  return gulp
    .src("./src/styles/css/*.css")
    .pipe(postcss(plugin))
    .pipe(gulp.dest("./src/styles/final"));
}

watch("src/css/*.css", css);

exports.default = css;

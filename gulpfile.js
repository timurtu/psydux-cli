/**
 * Created by timur on 8/18/16.
 */

const path = require('path')
const gulp = require('gulp')
const babel = require('gulp-babel')
const Promise = require('bluebird')
const rimrafAsync = Promise.promisify(require('rimraf'))
const eslint = require('gulp-eslint')


const paths = {

  src: path.resolve('src'),
  dist: path.resolve('dist'),
  template: path.resolve('template'),
  eslintrc: path.resolve('.eslintrc.js'),
  gulpfile: path.resolve('gulpfile.js'),

  fullSrc() {
    return path.join(this.src, '**/*.js')
  }
}

gulp.task('lint', () => gulp.src([paths.fullSrc(), path.join(paths.template, '**/*.js'), paths.gulpfile])
  .pipe(eslint({ configFile: paths.eslintrc }))
  .pipe(eslint.format()))
  // .pipe(eslint.failAfterError()))

gulp.task('clean', ['lint'], () => rimrafAsync(paths.dist))

gulp.task('build', ['clean'], () => gulp.src(paths.fullSrc())
  .pipe(babel())
  .pipe(gulp.dest(paths.dist)))

gulp.task('watch', ['build'], () => gulp.watch(paths.fullSrc(), ['build']))

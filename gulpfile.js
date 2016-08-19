/**
 * Created by timur on 8/18/16.
 */

const path = require('path')
const gulp = require('gulp')
const babel = require('gulp-babel')
const Promise = require('bluebird')
const rimrafAsync = Promise.promisify(require('rimraf'))


const paths = {
  
  src: path.resolve('src'),
  dist: path.resolve('dist'),
  
  fullSrc() {
    return path.join(this.src, '**/*.js')
  }
}

gulp.task('watch', ['build'], () => gulp.watch(paths.fullSrc(), ['build']))

gulp.task('build', ['clean'], () =>
  gulp.src(paths.fullSrc())
    .pipe(babel())
    .pipe(gulp.dest(paths.dist))
)

gulp.task('clean', () => rimrafAsync(paths.dist))

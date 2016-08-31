/**
 * Created by timur on 8/31/16.
 */

import path from 'path'
import gulp from 'gulp'
import babel from 'gulp-babel'
import paths from './paths'


gulp.src(path.join(paths.src(), '**/*.js'))
  .pipe(babel())
  .pipe(gulp.dest(paths.dist()))


import gulp from 'gulp';
import del from 'del';
import wrap from 'gulp-wrap-layout';
import rename from 'gulp-rename';

gulp.task('clean', () => del(['themes']));

gulp.task('wrap', () => {
  return gulp.src(['bower_components/photon-themes/**/*.min.css'])
    .pipe(
      wrap(`<dom-module id="<%= file.basename.replace(/\.css$/, '') %>"><template><style><%= contents %></style></template></dom-module>`)
    )
    .pipe(rename({dirname: '', extname: '.html'}))
    .pipe(gulp.dest('themes'));
});

gulp.task('default', gulp.series('clean', 'wrap'));

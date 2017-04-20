let gulp = require('gulp'),
    pdf = require('gulp-markdown-pdf'),
    md = require('gulp-markdown')

gulp.task('build:pdf', () => {
    gulp.src('src/**/*.md')
        .pipe(pdf())
        .pipe(gulp.dest('docs'))
})
gulp.task('build', () => {
    gulp.src('src/**/*.md')
        .pipe(md())
        .pipe(gulp.dest('html'))
})

gulp.task('default', ['build'])
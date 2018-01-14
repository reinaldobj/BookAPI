var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', gulpDefaultTask);

function gulpDefaultTask() {
    nodemon({
            script: 'app.js',
            ext: 'js',
            env: {
                PORT: 8000
            },
            ignore: ['./node_modules']
        })
        .on('restart', onRestart);
}

function onRestart() {
    console.log('Restarting...');
}
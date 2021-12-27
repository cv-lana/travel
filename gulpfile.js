import gulp from 'gulp';
import del from 'del';
import htmlInclude from 'gulp-file-include';
import versionNumber from 'gulp-version-number';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import libSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webpack from 'webpack-stream';
import gulpIf from 'gulp-if';
import htmlmin from 'gulp-htmlmin';

const isBuild = process.argv.includes('--production');
const isDev = !isBuild;

const sass = gulpSass(libSass);

const scripts = () => {
  return gulp.src('./src/js/index.js', { sourcemaps: isDev })
    .pipe(plumber(notify.onError({
      title: "JS",
      message: "Error: <%= error.message %>"
    })))
    .pipe(webpack({
      mode: isBuild ? 'production' : 'development',
      output: {
        filename: 'main.min.js',
        environment: { arrowFunction: false, }
      },
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }]
      }
    }))
    .pipe(gulp.dest('./app/js/', { sourcemaps: isDev }))
    .pipe(browserSync.stream());
};

const styles = () => {
  return gulp.src('./src/sass/style.sass', { sourcemaps: isDev })
    .pipe(plumber(notify.onError({
      title: "STYLES",
      message: "Error: <%= error.message %>"
    })))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulpIf(isBuild,
      autoPrefixer({
        grid: true,
        cascade: true
      })))
    // .pipe(gulp.dest('./app/css'))
    .pipe(gulpIf(isBuild, cleanCSS()))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./app/css', { sourcemaps: isDev }))
    .pipe(browserSync.stream());
};

const html = () => {
  return gulp.src('./src/html/*.html')
    .pipe(plumber(notify.onError({
      title: "HTML",
      message: "Error: <%= error.message %>"
    })))
    .pipe(newer('./app/'))
    .pipe(htmlInclude())
    .pipe(gulpIf(isBuild,
      versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': ['css', 'js']
        },
        'output': { 'file': 'gulp/version.json' }
      })))
    .pipe(gulpIf(isBuild,
      htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest('./app/'))
    .pipe(browserSync.stream());
};

const images = () => {
  return gulp.src('./src/img/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(plumber(notify.onError({
      title: "IMAGES",
      message: "Error: <%= error.message %>"
    })))
    .pipe(newer('./app/img/'))
    .pipe(gulpIf(isBuild,
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interplaced: true,
        optimizationLevel: 3
      })))
    .pipe(gulp.dest('./app/img/'))
    .pipe(browserSync.stream());
};

const copy = () => {
  return gulp.src('./src/resources/*.*')
    .pipe(gulp.dest('./app/'));
};

const reset = () => {
  return del('./app/');
};

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: './app/'
    },
    notify: false,
    port: 3000,
  });

  gulp.watch('./src/resources/*.*', copy);
  gulp.watch('./src/**/*.html', html);
  gulp.watch('./src/sass/**/*.sass', styles);
  gulp.watch('./src/img/**/*.{jpg,jpeg,png,gif,svg}', images);
  gulp.watch('./src/js/**/*.js', scripts);
};

const mainTasks = gulp.parallel(copy, html, styles, images, scripts);

const dev = gulp.series(reset, mainTasks, watcher);
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };

gulp.task('default', dev);
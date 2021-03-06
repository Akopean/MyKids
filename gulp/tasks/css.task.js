import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';
import { errorHandler } from '../helpers';

const $ = gulpLoadPlugins();

/**
 * CSS task
 * @class Css
 */
class Css {

    /**
     * Build your css
     * @returns {*}
     */
    static build() {
        return gulp.src(path.entries.css)
            .pipe($.plumber(config.plumber))
            .pipe($.sourcemaps.init(config.sourceMap.init))
            .pipe($.sass(config.sass).on('error', errorHandler))
            .pipe($.minifyCss(config.minifyCss))
            .pipe($.autoprefixer(config.autoprefixer))
            .pipe($.sourcemaps.write('./', config.sourceMap.write))
            .pipe(gulp.dest(path.dest.css))
    }
}

export default Css;

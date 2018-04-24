import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../config';
import path from '../path';
import { errorHandler } from '../helpers';

const $ = gulpLoadPlugins();

/**
 * HTML task
 * @class Html
 */
class Html {

    /**
     * Build your template
     * @returns {*}
     */
    static build() {
        return gulp.src(path.all.html)
			.pipe($.plumber(config.plumber))
			.pipe(gulp.dest(path.dest.html))
    }
}

export default Html;

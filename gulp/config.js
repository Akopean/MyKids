import { errorHandler } from './helpers';
import babel from 'rollup-plugin-babel';

/**
 * Plugins settings
 */
export default {


    //  https://www.npmjs.com/package/gulp-sass
    sass: {},

    //  https://www.npmjs.com/package/gulp-autoprefixer
    autoprefixer: { browsers: ['last 2 versions'] },

    //  https://www.npmjs.com/package/gulp-minify-css
    minifyCss: {},

    //  https://www.npmjs.com/package/gulp-sourcemaps
    sourceMap: {
        init: {
            loadMaps: true
        },
        write: {}
    },

    // https://www.npmjs.com/package/gulp-jshint
    jshint: { esnext: true },

    // https://www.npmjs.com/package/gulp-uglify
    uglify: {},

    // https://www.npmjs.com/package/gulp-imagemin
    imagemin: {},

    //  https://www.npmjs.com/package/gulp-plumber
    plumber: { errorHandler: errorHandler }
}

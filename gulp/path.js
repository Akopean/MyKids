/**
 * Project path
 */
let srcDir = 'app',
    publicDir = 'dist';

export default {
    entries: {
        css: [`./${ srcDir }/css/style.scss`],
        js: [`./${ srcDir }/js/app.js`,`./${ srcDir }/js/original_plugin.js`,`./${ srcDir }/js/facebook_album.js`]
    },
    vendor: {
        js: [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery-migrate/dist/jquery-migrate.min.js',
        './bower_components/lodash/dist/lodash.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/axios/dist/axios.min.js',
        './bower_components/sly/dist/sly.min.js',
        './bower_components/isotope-layout/dist/isotope.pkgd.min.js',
        './bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js'
        ]
    },
    all: {
        html: `${ srcDir }/*.html`,
        template: `${ srcDir }/**/*.html`,
        js: `${ srcDir }/js/**/*.js`,
        css: `${ srcDir }/css/**/*.scss`,
        fonts: [`${ srcDir }/fonts/**/*.*`],
        images: `${ srcDir }/images/**/*.{gif,jpg,png,svg}`
    },
    dest: {
        js: `${ publicDir }/js`,
        css: `${ publicDir }/css`,
        html: `${ publicDir }/`,
        fonts: `${ publicDir }/fonts`,
        images: `${ publicDir }/images`
    },
    publicDir: publicDir
}

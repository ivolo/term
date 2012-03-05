
var _ = require('underscore');

var Column = exports.Column = function (name, options) {
    this.name = name;
    this.options = options || {};
};

Column.prototype.calculateWidth = function (values) {
    if (!_.isArray(values))
        values = [];

    var width;

    var maxValueLength = _.max(values.concat([this.name]),
        function (val) {
            return val.length;
        }
    ).length;

    if (
        // if we are overflowing
        (this.options.width && this.options.width < maxValueLength)
        // or ifs fixed width
        || this.options.rule === 'fixed')
    {
        width = this.options.width;
    } else {
        // otherwise, we are variable length
        width = maxValueLength;
    }

    this.width = width;

    return width;
};

Column.prototype.format = function (str, width) {
    if (str.length > width) {
        return str.substring(0, width);
    } else {
        // empty space pad the string
        while (str.length !== width)
            str = str + ' ';

        return str;
    }
};
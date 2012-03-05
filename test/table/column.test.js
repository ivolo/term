
var column = require('../../lib/controllers/table/schema/column'),
    should = require('should');

describe('Table columns', function () {

    var columnName = 'Test column';

    it('should calculate width with no values', function (done) {
        var col = new column.Column(columnName);
        col.calculateWidth().should.equal(columnName.length);
        done();
    });

    it('should prevent overflow with no values', function (done) {
        var maxWidth = 3;
        var col = new column.Column(columnName, {
            width: maxWidth
        });
        col.calculateWidth().should.equal(maxWidth);
        done();
    });

    it('should prevent overflow with long values', function (done) {
        var maxWidth = columnName.length;

        var col = new column.Column(columnName, {
            width: maxWidth
        });

        col.calculateWidth([
            'This is really long woo'
        ]).should.equal(maxWidth);
        done();
    });

    it('should allow for fixed width columns', function (done) {

        var fixedWidth = 30;

        var col = new column.Column(columnName, {
            rule: 'fixed',
            width: fixedWidth
        });

        col.calculateWidth([
            'Hello',
            'Good'
        ]).should.equal(fixedWidth);
        done();
    });

});
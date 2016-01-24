describe('Filter: stripHtml', function () {

  beforeEach(module('ngRamen.filters.stripHtml'));

  var stripHtml;
  beforeEach(inject(function($filter) {
    stripHtml = $filter('rmnStripHtml');
  }));

  it('has a stripHtml filter', function () {
    expect(stripHtml).not.toBeNull();
  });

  it('should strip HTML', function () {
    expect(stripHtml('<p>Ciao</p>')).toEqual('Ciao');
    expect(stripHtml('Hey look at this:<img src=""/> Awesome!')).toEqual('Hey look at this: Awesome!');
    expect(stripHtml('')).toEqual('');
    expect(stripHtml(undefined)).toEqual('');
  });

});
describe('Service: path-join', function () {

  beforeEach(module('ngRamen.services.pathJoin'));

  var pathJoin;

  beforeEach(inject(function (_rmnPathJoin_) {
    pathJoin = _rmnPathJoin_;
  }));

  it('should fucking work', function () {
    expect(pathJoin).toBeDefined();
  });

  it('should join paths', function(){
    expect(pathJoin('http://hello.com', 'main')).toEqual('http://hello.com/main/');
    expect(pathJoin('/hello', 'main', 'api', true)).toEqual('/hello/main/api');

  });

});

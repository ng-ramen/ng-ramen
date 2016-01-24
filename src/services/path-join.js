angular.module('ngRamen.services.pathJoin', [
  'ngRamen.filters.path'
])
.factory('rmnPathJoin', ['$filter', function($filter) {
  return function() {
    var noTrailingSlash = false;
    var pathArgumentsLength = arguments.length;
    if (typeof arguments[arguments.length - 1] == 'boolean') {
      noTrailingSlash = arguments[arguments.length - 1];
      pathArgumentsLength--;
    }
    var str = arguments[0];
    for (var i = 1; i < pathArgumentsLength; i++) {
      str = $filter('rmnPath')(str, arguments[i], true);
    }
    if (!noTrailingSlash) {
      str += '/';
    }
    return str;
  };
}]);

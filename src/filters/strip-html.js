angular.module('ngRamen.filters.stripHtml', [])
.filter('rmnStripHtml', function() {
  return function(s) {
    return s ? String(s).replace(/<[^>]+>/gm, '') : '';
  };
});
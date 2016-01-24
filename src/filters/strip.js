angular.module('ngRamen.filters.strip', [])
.filter('rmnStrip', function() {
  return function(s, ch) {
    ch = (ch || ' ');
    while (s.length > 0 && ch.indexOf(s.charAt(0)) != -1) {
      s = s.substr(1);
    }
    while (s.length > 0 && ch.indexOf(s.charAt(s.length - 1)) != -1) {
      s = s.substr(0, s.length - 1);
    }
    return s;
  };
});
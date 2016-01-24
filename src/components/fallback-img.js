angular.module('ngRamen.components.fallbackImg',[])
.directive('rmnFallbackImg', function () {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('error', function () {
        angular.element(this).attr('src', attrs.rmnFallbackImg);
      });
    }
  };
});

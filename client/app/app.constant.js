(function(angular, undefined) {
'use strict';

angular.module('testNgApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);
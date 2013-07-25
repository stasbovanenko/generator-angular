'use strict';

module <%= _.camelize(appname) %> {
    export var app = angular.module("<%= _.camelize(appname) %>", []);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: '<%= _.camelize(appname) %>.Controllers.Main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}

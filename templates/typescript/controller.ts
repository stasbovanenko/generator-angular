/// <reference path="../../bower_components/dt-angular/angular.d.ts" />
'use strict';

module <%= _.camelize(appname) %>.Controllers {
    export interface I<%= _.classify(name) %>Scope extends ng.IScope {
        awesomeThings: string[];
    }
    class <%= _.classify(name) %> {
        private static $inject = ['$scope'];
        constructor($scope: I<%= _.classify(name) %>Scope){
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'TypeScript',
                'AngularJS',
                'Bootstrap',
                'Karma'
            ];
        }
    }
    app.controller("<%= _.camelize(appname) %>.Controllers.<%= _.classify(name) %>", <%= _.classify(name) %>);
}
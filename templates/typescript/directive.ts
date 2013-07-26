/// <reference path="../../bower_components/dt-angular/angular.d.ts" />
'use strict';

module <%= _.camelize(appname) %>.Directives {
    class <%= _.classify(name) %> {
        private static $inject = [];
        constructor(){
            return {
                template: '<div></div>',
                restrict: 'E',
                link: function postLink(scope, element, attrs) {
                    element.text('this is the <%= _.camelize(name) %> directive');
                }
            };
        }
    }
    app.directive("<%= _.camelize(appname) %>.Directives.<%= _.classify(name) %>", <%= _.classify(name) %>);
}
/// <reference path="../../bower_components/dt-angular/angular.d.ts" />
'use strict';

module <%= _.camelize(appname) %>.Filters {
    class <%= _.classify(name) %> {
        private static $inject = [];
        constructor(){
            return function (input) {
                return '<%= _.camelize(name) %> filter: ' + input;
            };
        }
    }
    app.filter("<%= _.camelize(appname) %>.Filters.<%= _.classify(name) %>", <%= _.classify(name) %>);
}
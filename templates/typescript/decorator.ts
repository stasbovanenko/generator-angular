/// <reference path="../../bower_components/dt-angular/angular.d.ts" />
'use strict';

module <%= _.camelize(appname) %>.Decorators {
    class <%= _.classify(name) %> {
        private static $inject = ['$delegate'];
        constructor($delegate){
            // decorate the $delegate
            return $delegate;
        }
    }
    app.config(function ($provide: ng.IProvide) {
        $provide.decorator('<%= _.camelize(appname) %>.Decorators.<%= _.camelize(name) %>', <%= _.classify(name) %>);
    }
}
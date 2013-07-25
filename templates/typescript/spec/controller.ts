/// <reference path="../../../app/bower_components/dt-angular/angular.d.ts" />
'use strict';

describe('Controller: <%= _.classify(name) %>', function () {

  // load the controller's module
  beforeEach(module('<%= _.camelize(appname) %>'));

  var <%= _.classify(name) %>,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope: ng.IScope) {
    scope = $rootScope.$new();
    <%= _.classify(name) %> = $controller('<%= _.classify(name) %>', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});

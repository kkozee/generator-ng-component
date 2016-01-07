(() => {
  'use strict';

  class <%= classedName %>Factory {
    constructor() {

    }

    <%= cameledName %>Factory() {
      return new <%= classedName %>Factory();
    }
  }

  angular.module('<%= scriptAppName %>')
    .factory('<%= cameledName %>Factory', <%= classedName %>Factory.<%= cameledName %>Factory())
})();

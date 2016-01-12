(() => {
  'use strict';

  class <%= classedName %>Service {
    constructor() {

    }

    <%= cameledName %>Service() {
      return new <%= classedName %>Service();
    }
  }

  angular.module('<%= scriptAppName %>')
    .Service('<%= cameledName %>Service', <%= classedName %>Service.<%= cameledName %>Service())
})();

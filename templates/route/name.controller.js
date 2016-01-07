(() => {
  'use strict';

  class <%= classedName %>Ctrl {
    constructor() {

    }
  }

  angular.module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);

})();

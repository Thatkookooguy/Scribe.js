(function () {

    'use strict';

    window.app.filter("trust", ['$sce', function($sce) {
        return function(log){
          var completeString = '';
          var numberOfVars = Object.keys(log.args).length;
          for(var i = 0; i < numberOfVars; i++) {
            completeString += i === 0 ?
              Autolinker.link( ansi_up.ansi_to_html(log.args[i]), { stripPrefix: false } ) + '\n' :
              Autolinker.link( [
                '<span class="hljs">',
                hljs.highlight('json', JSON.stringify(log.args[i], undefined, 2), true, false).value,
                '</span>\n'
              ].join(''), { stripPrefix: false } );
          }
            return $sce.trustAsHtml(completeString);
        }
    }]);
}());

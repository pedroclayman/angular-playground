import angular from 'angular';

(function() {
    'use strict'



    var module = angular.module('app', []);

    module.directive('parent', [

      function() {
        return {
          compile: function() {
            console.log('parent compile');

            return {
              pre: function() {
                console.log('parent pre');
              },
              post: function() {
                console.log('parent post');
              }
            }
          },
          controller: function() {
            console.log('parent controller');
          }
        }
      }
    ]);

    module.directive('child', [

      function() {
        return {
          compile: function() {
            console.log('child compile');

            return {
              pre: function() {
                console.log('child pre');
              },
              post: function() {
                console.log('child post');
              }
            }
          },
          controller: function() {
            console.log('child controller');
          }
        }
      }
    ]);
})();

angular.module('app', [])
    .controller('form', ['$scope', function($scope) {
        $scope.reviews = [];
        $scope.get = function() {
            var content = document.querySelector('#write').value;
            if (content.trim() !== '') {
                $scope.reviews.unshift({
                    text: content,
                    time: new Date().toLocaleString()
                });
                $scope.say = '';
            }
        }
    }])

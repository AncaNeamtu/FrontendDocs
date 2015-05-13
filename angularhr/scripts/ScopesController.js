/**
 * Created by my comp on 12.05.2015.
 */

anguler.module("hrApp").controller('ScopersController',function($scope){
$scope.title = 'Two Way Binding Demo';
$scope.childtemplate = 'templates/childscope.html';
$scope.resetFirstVariable = function() {
    $scope.firstVariable = undefined;
};
$scope.setFirstVariable = function(val) {
    $scope.firstVariable = val;
}
});
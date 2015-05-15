hrApp.controller('Colors', ['$scope', function ($scope) {

    //TODO #1
    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted"
        },
        {
            "text": "primary",
            "class": "text-primary"
        },
        {
            "text": "succes",
            "class": "text-succes"
        },
        {
            "text": "info",
            "class": "text-info"
        },
        {
            "text": "warning",
            "class": "text-warning"
        },
        {
            "text": "danger",
            "class": "text-danger"
        }
    ];

    $scope.val;
    $scope.changeColor = function(){
        //TODO #3
        $scope.val=$scope.color.class;
        console.log($scope.val);

    }

    $scope.Filtru1;
    $scope.Filtru2;
}]);
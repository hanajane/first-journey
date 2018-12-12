var app = angular.module("myShoppingList", []); 

app.controller("myCtrl", function($scope)
{
    $scope.products = [];

   /* $scope.addItem = function ()
   {
        $scope.products.push($scope.addMe);
    }
    */
    $scope.addItem = function ()
    {
        $scope.errorText = "";

        if ($scope.addMe != undefined)
        {
            if (!$scope.addMe.toUpperCase)
            {
                return;
            }
                if ($scope.products.indexOf($scope.addMe) == -1)
                {
                    $scope.products.push($scope.addMe);
                    $scope.addMe = undefined;
                }
            else
            {
                $scope.errorText = "The item is already in your shopping list.";
            }
            console.log($scope.products);
        }      
        else
        {
            $scope.errorText = "Please insert item";
        }
    }
    $scope.removeItem = function (x)
    {
        $scope.errorText = "";
        $scope.products.splice(x, 1);
    }

//delete all the list
    $scope.onClear = function ()
    {  
        $scope.errorText = "";
        $scope.yes = confirm("Are you sure you want to clear the list?");
        
        if ($scope.yes == true)
        {
            if ($scope.products = [])
            // if ($scope.products !== [])
            // if ($scope.products.indexOf($scope.addMe) == -1)
            {
                console.log($scope.errorText)
                $scope.errorText = "Your list is empty";
                // $scope.products = [];
                // $scope.addMe    = [];
            }
            else
            {
                $scope.products = [];
                $scope.addMe    = [];
                // console.log($scope.errorText)
                // $scope.errorText = "Your list is empty";
            }
        };
        $scope.editTodo = function(todo) {
            $scope.editMode = true;
            $scope.newToDo = angular.copy(todo);
            $scope.currentItemIndex = $scope.todos.indexOf(todo);
          };
    }
            
})
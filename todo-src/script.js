// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [
    {task: "Learn Angular", status:"incomplete"},
    {task:"Learn node", status:"incomplete"}
  ];
    $scope.priorities = ["Today", "Today"];
  $scope.newItem = "";
    $scope.priority = "";

  $scope.edit = false;

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      if($scope.priority == ""){
        alert("Please input a priority.");
      }
      else{
      $scope.todos.push({task:$scope.newItem, status:"incomplete"});
      $scope.newItem = "";
        $scope.priorities.push($scope.priority);
      $scope.priority = "";
      }
    }
  }

  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
      $scope.priorities.splice(index, 1);
  }

  $scope.deleteCompleted = function(index){
  if(index > -1){
    if($scope.todos[index].status == 'complete'){
    $scope.todos.splice(index, 1);
    $scope.priorities.splice(index, 1);}
  return $scope.deleteCompleted(index-1);}
  }
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 *
 * *********************/

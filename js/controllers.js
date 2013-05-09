// controllers.js

app.controller('dataCtrl', function($scope,JsonService){

  var raw = JSON.parse(JsonService);

  console.log(raw);

  // fit to google format
    var data = [];
    
    for (var i = raw.length - 1; i >= 0; i--) {        

        var tmp = [
            new Date(raw[i].date_start), 
            new Date(raw[i].date_end), 
            new String(raw[i].price)
            ];
        data.push(tmp);

    };

    $scope.data = data;
 
});

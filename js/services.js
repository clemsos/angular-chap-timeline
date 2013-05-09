// services.js

app.factory('JsonService', function($resource) {
    var data = generateData(10);
    return data;
});
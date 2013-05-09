// directives.js

app.directive('chapTimeline', function () {
    // timeline goes here
     return {
        
        link: function (scope, element, attrs) {
            
            console.log("timeline binded");
            console.log(scope);
            console.log(google);
            
            // Set callback to run when API is loaded
            google.setOnLoadCallback(drawVisualization);

            // Called when the Visualization API is loaded.
            function drawVisualization() {
                // Create and populate a data table.
                var data = new google.visualization.DataTable();
                data.addColumn('datetime', 'start');
                data.addColumn('datetime', 'end');
                data.addColumn('string', 'content');
                
                data.addRows(scope.data);
                
                console.log(data);

                options = {
                  "width":  "100%",
                  "height": "600px",
                  "style": "box" // optional
                };

                // Instantiate our timeline object.
                var timeline = new links.Timeline(document.getElementById('timeline'));

                // Draw our timeline with the created data and options
                timeline.draw(data, options);
            }

        }
    }

})
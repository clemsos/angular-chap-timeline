// fake data generator for timeline 


function Slice(start, end, price, available) {
    self=this;

    self.date_start = start;  
    self.date_end = end;
    self.price = price;
    self.available = available;

    return self;
}

function generateData( totalLength ) {
    
    var data = []; 
    for (var i = 0; i < totalLength ; i++) {

        // var start = 
        var tmp = new Slice(
            new Date(2013,12,31),  
            new Date(2014,1,i), 
            i*100, 
            true 
        )

        data.push(tmp);
        
    };    

    return JSON.stringify(data);
    
};    
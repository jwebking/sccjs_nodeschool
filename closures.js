function foo(){
    var bar;
    quux = 12;
    
    function zip(){
       var quux;
       bar = true;
    }
    return zip;
}
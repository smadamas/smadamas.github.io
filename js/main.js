/*window.onload = function() {
    calcScrollLength();
  };*/

function calcScrollLength() {
    var sum = 0;
    app.use("..", express.static('..'));

    console.log("Calcing scroll length...");

    require(['fs','image-size'], function runCalculations(){
        const dir = "../img/carousel"
        const files = fs.readdirSync(dir)

        for (const file of files) {
            sizeOf(file, function (err, dimensions) {
                sum += (dimensions.width/(dimensions.height/250))
            });
        }
        console.log(sum);
    });

    
    console.log("Done!");
}
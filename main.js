(document.onload = function(){
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
context.canvas.width = innerWidth
    context.canvas.height = innerHeight

    var routes =  new ImageArray
    var renderer = new Renderer(routes.imageRoutes)
   var randomizedArray =  renderer.RandomizeArray()
    renderer.DrawCanvas(randomizedArray, function(images){
        for (var i = 0; i < images.length; i++) {
            context.drawImage(images[i], 240*i+1, 40)

        }
    })

})();
var Renderer = function(array){
    this.array = array
}

Renderer.prototype.RandomizeArray = function(){
    for (var i = this.array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    }
    return this.array;
}

Renderer.prototype.DrawCanvas = function(array, callback){
var images = []
    for (var i = 0; i < array.length; i++) {
        images[i] = new Image()
        images[i].onload = function(){
            if(++i >= array.length-1){
                callback(images)
            }
        }
        images[i].src = array[i]
        images[i].maxHeight = 20 + 'px'
        images[i].maxWidth = 10 + 'px'
    }
}
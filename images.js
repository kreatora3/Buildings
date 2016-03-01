var ImageArray = function(){
    this.imageRoutes = ['images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg'];
}

ImageArray.prototype.addImageRoute = function(img){
    this.imageRoutes.push(img)
}
export default class SpriteSheet {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }


    define(name, x, y) {
        const buffers = [false, true].map(flip => {
            const buffer = document.createElement('canvas');
            buffer.width = width;
            buffer.height = height;

            buffer
                .getContext('2d');
                .drawImage(
                    this.image,
                    x = this.width,
                    y = this.height,
                    this.width;
                    this.height;
                    0,
                    0,
                    this.width,
                    this.height);
                  this.tiles.set(name,buffer)  
        }
        
        draw(name,context,x,y){
            const buffer = this.tiles.get(name);
            context.drawImage(buffer,x,y);

        }
        drawTile(name, context, x, y){
            this.draw(name, context, x*this.width, y*this.height);
        }
    }
}
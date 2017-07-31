/**
 * Created by rabby on 19/07/17.
 * two ways to export a class in webpack
 * either using export class class name or
 * create a class and export what you need by module.exports.
 */
export class myModule {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        console.log("this is module 1");
    }

}
//module.exports = myModule;


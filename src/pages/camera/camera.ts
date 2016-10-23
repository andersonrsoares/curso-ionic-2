import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class TakeCamera {

  image:any;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Camera Page');
  }

  takePhoto(){
        //options  https://github.com/apache/cordova-plugin-camera
        var options = {
           // Some common settings are 20, 50, and 100
           quality: 50,
           destinationType: Camera.DestinationType.DATA_URL,
           // In this app, dynamically set the picture source, Camera or photo gallery
           sourceType: Camera.PictureSourceType.CAMERA,
           encodingType: Camera.EncodingType.JPEG,
           mediaType: Camera.MediaType.PICTURE,
           allowEdit: true,
           correctOrientation: true  //Corrects Android orientation quirks
       }
        Camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64:
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.image = base64Image;
          console.log(base64Image);
        }, (err) => {
         // Handle error
             console.log(err);
        });
    }
    takeGalery(){
        //options  https://github.com/apache/cordova-plugin-camera
        var options = {
           // Some common settings are 20, 50, and 100
           quality: 50,
           destinationType: Camera.DestinationType.DATA_URL,
           // In this app, dynamically set the picture source, Camera or photo gallery
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
           encodingType: Camera.EncodingType.JPEG,
           mediaType: Camera.MediaType.PICTURE,
           allowEdit: true,
           correctOrientation: true  //Corrects Android orientation quirks
       }
        Camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64:
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.image = base64Image;
          console.log(base64Image);
        }, (err) => {
         // Handle error
             console.log(err);
        });
      }
}

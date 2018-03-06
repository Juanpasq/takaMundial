import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IngresoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingreso',
  templateUrl: 'ingreso.html',
})
export class IngresoPage {
    
     
  @ViewChild('usuario')  usuario;
  @ViewChild('password') password;


  public entrar(){

    if(this.usuario.value != "Juan"){
      console.log("putooooooooooooo");
    }else{
        console.log("Usuario: "+this.usuario.value+ " ---- Password: "+this.password.value);
        console.log(this.usuario);
        console.log("entraste !!!");}

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      console.log("aasds"+this.usuario);
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad IngresoPage');
  }

}

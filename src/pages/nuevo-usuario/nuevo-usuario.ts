import { Component, ViewChild,  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the NuevoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-usuario',
  templateUrl: 'nuevo-usuario.html',
})

export class NuevoUsuarioPage {

  @ViewChild('usuario')  usuario;
  @ViewChild('email') email;
  @ViewChild('rePassword')  rePassword;
  @ViewChild('password') password;
 
  crear(){
    console.log("this.usuario")
    console.log(this.usuario.value, this.email.value, this.rePassword.value,);
    console.log(this.password.value);
  }



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoUsuarioPage');
  }

}

import { Component, OnInit } from '@angular/core';

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
  } from '@angular/forms';

  import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup;

  constructor(public fb: FormBuilder, private alertController: AlertController,
    public navCtrl: NavController) { 
      
      this.formulariologin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar(){
    var f= this.formulariologin.value;
  
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    
  
    if(usuario.nombre == f.nombre && usuario.contraseña == f.contraseña){
      console.log('ingreso')
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('facturas')

    }else{
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          subHeader: 'Verifica tus datos',
          message: 'Las credenciales no son correctas!',
          buttons: ['OK'],
        });
    
        await alert.present();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
  } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController,
    public navCtrl: NavController) { 
    this.formularioRegistro = this.fb.group({

      'nombre': new FormControl("",Validators.required),
    'contraseña': new FormControl("",Validators.required),
    'ConfirmacionPassword': new FormControl("",Validators.required),
    });
    

  }

  ngOnInit() {
  }
  async guardar(){
    var f= this.formularioRegistro.value;
  
  
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Verifica tus datos',
        subHeader: 'debes de llenar los campos',
        message: 'Las credenciales deben de estar llenas!',
        buttons: ['OK'],
      });
  
      await alert.present();
      
      return;
    }
    var usuario ={
      nombre: f.nombre,
      contraseña: f.contraseña

    }
    localStorage.setItem('usuario' ,JSON.stringify(usuario));

    localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('facturas')
  }
}

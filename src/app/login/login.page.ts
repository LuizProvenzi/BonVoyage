import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authRef: AngularFireAuth;
  Email: string;
  Password: string;

  constructor(private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              public afAuth: AngularFireAuth,
              private router: Router) {
  this.Email = "";
  this.Password = "";
  this.authRef = afAuth;
  }

  ngOnInit() {
  }

  async alert(title: string, message: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: title,
      message,
      buttons: ['ok'],
      backdropDismiss: false
    });
    await alert.present();
  }

  async toast(title: string, position: any = 'top'): Promise<void> {
    const toast = await this.toastCtrl.create({ message: title, position, duration: 2000})
    await toast.present();
  }

  login() {
    console.log("ENTRANDO");
    this.authRef.auth.signInWithEmailAndPassword(this.Email, this.Password).then(data => {
      this.toast("Login efetuado com sucesso!");
      localStorage.setItem("PS: USER_INFO", JSON.stringify(data.user));

      this.router.navigate(['../tabs/tabVeiculos']);
    },
    error => {
      console.log(error);
      this.alert("Erro", "Informações Incorretas!");
    });
  }

}

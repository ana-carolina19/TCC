import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.page.html',
  styleUrls: ['./introducao.page.scss'],
})
export class IntroducaoPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Seja bem-vindos!!!!',
      duration: 1000,
      spinner: "dots"
    });

    loading.present();
  }

  ngOnInit() {
  }

}

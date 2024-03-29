import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input ('product') product: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async buyItem(product) {
    let toast = await this.toastCtrl.create({
      message: ` ${product.name} foi comprada(o) com sucesso`
    });
        await toast.present();
  }
}
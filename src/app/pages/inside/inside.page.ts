import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Storage} from '@ionic/storage';
import {ToastController} from '@ionic/angular';
import {ChatsPage} from '../chats/chats.page';
import {BuddiesPage} from '../buddies/buddies.page';
import {MePage} from '../me/me.page';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})

export class InsidePage implements OnInit {
    chatsPage = ChatsPage;
    buddiesPage = BuddiesPage;
    mePage = MePage;

  constructor(private authService: AuthService, private storage: Storage, private toastController: ToastController) { }

  ngOnInit() {
  }

  // loadSpecialInfo()
  // {
  //   this.authService.getSpecialData().subscribe(res => {
  //       this.data = res['msg'];
  //   });
  // }

    // logout(){
    //     this.authService.logout();
    // }
    //

    // clearToken(){
    //     this.storage.remove('access_token');
    //
    //     let toast = this.toastController.create({
    //     message: 'JWT removed',
    //     duration: 3000
    //     });
    //     toast.then(toast => toast.present());
    // }
}

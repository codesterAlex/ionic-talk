import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsidePage } from './inside.page';
import {ChatsPage} from '../chats/chats.page';
import {BuddiesPage} from '../buddies/buddies.page';
import {MePage} from '../me/me.page';
import {ChatsPageModule} from '../chats/chats.module';
import {MePageModule} from '../me/me.module';
import {BuddiesPageModule} from '../buddies/buddies.module';


const routes: Routes = [
  {
    path: '',
    component: InsidePage,
    children: [
        {
            path: 'chatsPage',
            outlet: 'chatsPage',
            component: ChatsPage
        },
        {
            path: 'buddiesPage',
            outlet: 'buddiesPage',
            component: BuddiesPage
        },
        {
            path: 'mePage',
            outlet: 'mePage',
            component: MePage
        }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChatsPageModule,
    MePageModule,
    BuddiesPageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [InsidePage]
})
export class InsidePageModule {}

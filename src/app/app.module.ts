import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GeneratedTest } from '../pages/generated-test/generated-test';
import { Alert } from '../pages/alert/alert';
import { Button } from '../pages/button/button';
import { Cards } from '../pages/cards/cards';
import { Modal } from '../pages/modal/modal';
import { ModalLogin } from '../pages/modal-login/modal-login';
import { ConnectionService } from '../providers/connection-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeneratedTest,
    Alert,
    Button,
    Cards,
    Modal,
    ModalLogin
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeneratedTest,
    Alert,
    Button,
    Cards,
    Modal,
    ModalLogin
  ],
  providers: [ConnectionService]
})
export class AppModule {}

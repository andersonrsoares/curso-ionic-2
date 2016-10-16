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
import { Navigation } from '../pages/navigation/navigation';
import { ConnectionService } from '../providers/connection-service';
import { Tab } from '../pages/tab/tab';
import { HomeTab } from '../pages/home-tab/home-tab';
import { ContatoTab } from '../pages/contato-tab/contato-tab';
import { Toast } from '../pages/toast/toast';
import { Toolbar } from '../pages/toolbar/toolbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeneratedTest,
    Alert,
    Button,
    Cards,
    Modal,
    ModalLogin,
    Navigation,
    Tab,
    HomeTab,
    ContatoTab,
    Toast,
    Toolbar
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
                        tabsPlacement: 'bottom',
                          platforms: {
                            android: {
                              tabsPlacement: 'top'
                            },
                            ios: {
                              tabsPlacement: 'bottom'
                            },
                            windows:
                            {
                              tabsPlacement: 'top'
                            }
                          }
                        })
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
    ModalLogin,
    Navigation,
    Tab,
    HomeTab,
    ContatoTab,
    Toast,
    Toolbar
  ],
  providers: [ConnectionService]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GeneratedTest } from '../pages/generated-test/generated-test';
import { Alert } from '../pages/alert/alert';
import { ConnectionService } from '../providers/connection-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeneratedTest,
    Alert
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeneratedTest,
    Alert
  ],
  providers: [ConnectionService]
})
export class AppModule {}

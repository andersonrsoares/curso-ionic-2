import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GeneratedTest } from '../pages/generated-test/generated-test';
import { ConnectionService } from '../providers/connection-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeneratedTest
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeneratedTest
  ],
  providers: [ConnectionService]
})
export class AppModule {}

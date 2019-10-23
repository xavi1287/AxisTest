

import { AppGlobal } from './helper/app-global';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthorizatedGuard } from './guards/authorizated.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [

  ],
  providers: [
    StorageService,
    AuthorizatedGuard,
    AppGlobal,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  bootstrap: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

import {
  Injectable
} from '@angular/core';

import {
  device,
  platformNames,
  screen
} from 'platform';

@Injectable()
export class PlatformService {

  public isAndroid():boolean {
    return device.os === platformNames.android;
  }

  public isIOS():boolean{
    return device.os === platformNames.ios;
  }

  public getScreenWidthDIP():number {
    return screen.mainScreen.widthDIPs;
  }


}
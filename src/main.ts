import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';

async function prepareApp() {
  if (isDevMode()) {
    const { worker } = await import('~/mocks/browser');
    await worker.start({
      onUnhandledRequest: 'bypass'
    });
    const handlers = worker.listHandlers();
    const consoleGroupRed = (s: string) => console.group(`%c${s}`, 'color:orangered;font-weight:bold'); // matches the red console log from MSW
    if (handlers.length > 0) {
      consoleGroupRed('[MSW] Handled URLs ▼');
      handlers.forEach((handler) => {
        // @ts-expect-error `info` still present, but apparently not in `handler` type
        console.log(handler.info.header);
      });
      console.groupEnd();
    } else {
      consoleGroupRed('[MSW] No handlers ◼︎');
      console.groupEnd();
    }
  }
}

prepareApp().then(() => {
  bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
});

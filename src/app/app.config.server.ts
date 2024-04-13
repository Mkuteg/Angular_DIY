import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const AppConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
}

export const config = mergeApplicationConfig(AppConfig, serverConfig);
import {ApplicationConfig, Component} from '@angular/core';
import {provideRouter, RouterLink, RouterOutlet} from '@angular/router';
import {routes} from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercise12';
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

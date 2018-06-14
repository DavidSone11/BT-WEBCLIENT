# BTWEBCLIENTS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### Infomation


npm install --save @ng-bootstrap/ng-bootstrap@2.0.0


37
down vote
The options above will work, however I use this approach via NPM:

Navigate to: Bootstrap 4 and retrieve the npm command
Run the NPM command obtained from step 1 in your project i.e

npm install bootstrap@4.0.0-alpha.5 --save

After installing the above dependency run the following npm command which will install the bootstrap module  npm install --save @ng-bootstrap/ng-bootstrap You can read more about this here

Add the following import into app.module import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; and add NgbModule to the imports
Your app module will look like this:

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   declarations: [
   AppComponent,
   WeatherComponent
],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  NgbModule.forRoot(), // Add Bootstrap module here.
],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
Open angular-cli.json and insert a new entry into the styles array :

"styles": [
  "styles.css",
   "../node_modules/bootstrap/dist/css/bootstrap.min.css"
],
Open src/app/app.component.html and add

<alert type="success">hello</alert>
or if you would like to use ng alert then place the following on your app.component.html page

<ngb-alert [dismissible]="true">I'm a dismissible alert :) </ngb-alert>
Now run your project and you should see the bootstrap alert message in the browser.

ng generate component componentName --module=app.module





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


2: Installing Bootstrap from NPM
Next, we need to install Bootstrap. Change the directory to the project we created (cd angular-bootstrap-example) and execute the following command:

For Bootstrap 3:

npm install bootstrap@3.3.7
For Bootstrap 4:

npm install bootstrap
2.1: Alternative: Local Bootstrap CSS
As an alternative, you can also download the Bootstrap CSS and add it locally to your project. I donwloaded Bootstrap from the website and created a folder styles (same level as styles.css):



 Don’t place your local CSS files under assets folder. When we do the production build with Angular CLI, the CSS files declared in the angular.json will be minified and all styles will be bundled into a single styles.css. The assets folder is copied to the dist folder during the build process (the CSS code will be duplicated). Only place your local CSS files under assets in case you are importing them directly in the index.html.

3: Importing the CSS
We have two options to import the CSS from Bootstrap that was installed from NPM:

1: Configure angular.json:

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.scss"
]
2: Import directly in src/style.css or src/style.scss:

@import '~bootstrap/dist/css/bootstrap.min.css';
I personally prefer to import all my styles in src/style.css since it’s been declared in angular.json already.

3.1 Alternative: Local Bootstrap CSS
If you added the Bootstrap CSS file locally, just import it in angular.json

"styles": [
  "styles/bootstrap-3.3.7-dist/css/bootstrap.min.css",
  "styles.scss"
],
or src/style.css:

@import './styles/bootstrap-3.3.7-dist/css/bootstrap.min.css';
With this setup we are able to start using the Bootstrap CSS classes in our project.

4: Bootstrap JavaScript Components with ngx-bootstrap (Option 1)
In case you don’t need to use Bootstrap JavaScript components (that require JQuery), this is all the setup you need. But if you need to use modals, accordion, datepicker, tooltips or any other component, how can we use these components without installing jQuery?

There is an Angular wrapper library for Bootstrap called ngx-bootstrap that we can also install from NPM:

npm install ngx-bootstrap --save
 ng2-bootstrap and ngx-bootstrap are the same package. ng2-bootstrap was renamed to ngx-bootstrap after #itsJustAngular.

In case you want to install Bootstrap and ngx-bootstrap at the same time when you create your Angular CLI project:

npm install bootstrap ngx-bootstrap --save
4.1: Adding the required Bootstrap modules in app.module.ts
Go through the ngx-bootstrap and add the modules needed in your app.module.ts. For example, suppose we want to use the Dropdown, Tooltip and Modal components:

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  // ...
})
export class AppBootstrapModule {}
Because we call the .forRoot() method for each module (due the ngx-bootstrap module providers), the functionalities will be available in all components and modules of your project (global scope).

As an alternative, if you would like to organize the ngx-bootstrap in a different module (just for organization purposes in case you need to import many bs modules and don’t want to clutter your app.module), you can create a module app-bootstrap.module.ts, import the Bootstrap modules (using forRoot()) and also declare them in the exports section (so they become available to other modules as well).

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule]
})
export class AppBootstrapModule {}
At last, don’t forget to import your bootstrap module in you app.module.ts.

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

@NgModule({
  imports: [BrowserModule, AppBootstrapModule],
  // ...
})
export class AppModule {}
ngx-bootstrap works with Bootstrap 3 and 4. And I also made some tests and most of the functionalities also work with Bootstrap 2.x (yes, I still have some legacy code to maintain).

5: Let’s code!
Now that we have the setup for CSS and JavaScript components completed, let’s add some code to our app.component.html:

<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand">
              <img src="assets/img/ngx-bootstrap.svg" class="logo">
            </a>
            <span class="navbar-brand">Angular + Bootstrap</span>
        </div>
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">
              Link <span class="sr-only">(current)</span>
            </a></li>
            <li><a href="#">Link</a></li>
            <li class="dropdown" dropdown> <!-- {1} -->
                <a dropdownToggle role="button"> <!-- {2} -->
                  Dropdown <span class="caret"></span></a>
                <ul *dropdownMenu class="dropdown-menu"> <!-- {3} -->
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
For the DropDown component, ngx-bootstrap provides some directives:

{1}: dropdown directive: use this directive instead of class="dropdown".

{2}: dropdownToggle directive: use this directive instead of class="dropdown-toggle" data-toggle="dropdown". It will also add the aria atributes to the HTML element.

{3}: dropdownMenu directive: use this directive instead of class="dropdown-menu".

And you’ll have the same behavior as Bootstrap + Jquery:



Let’s also develop a button with a tooltip:

<button type="button" class="btn btn-primary" 
        tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Button with tooltip
</button>
The tooptip directive has the same effect as data-toggle="tooltip" title="Tooltip text".



Let’s also take a look how to use a Modal component:

<button type="button" class="btn btn-info" 
        (click)="openModal(template)">Create template modal</button>

<ng-template #template>
    <div class="modal-header">
        <h4 class="modal-title pull-left">Modal</h4>
        <button type="button" class="close pull-right" 
                aria-label="Close" (click)="modalRef.hide()">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
        This is a modal.
    </div>
</ng-template>
In the code above, note the we are using a ng-template as container of our modal template. This template is being referenced by a template local variable template. When the user clicks on the button, we tell our code to open the modal referenced by template (you can have as many modals as needed, just give different names to your local variables).

There is also a close button in the modal that is calling modalRef.hide().

So we need some TypeScript code in our app.component.ts as well:

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  // ..
})
export class AppComponent {
  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) {} // {2}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
{1}: first we need a variable to keep a reference of our modal. This is going to be used to close the modal.

{2}: to show the modal, we also need the ngx-bootstrap service

{3}: and when the user clicks on the button to open the popup we keep the modal reference and pass the template local name to the modalService.



 ngx-bootstrap source code is still using Angular v2.x. Since there were no major breaking changes from v2.x to v.4x, it’s ok to use with v4.x. However, some ngx-bootstrap components use <template> instead of <ng-template>, so you might get warnings in your browser console related to template being deprecated. For the examples, such as the modal, replace template with ng-template in your code and you should be fine.

We have an Angular project using Bootstrap and did not need to import JQuery to have the same behavior!

6: Bootstrap 4 JavaScript Components with ng-bootstrap (Option 2)
There is also a second option to use Bootstrap JavaScript components in Angular without JQuery in case you are using Bootstrap 4: ng-bootstrap.

You can install ng-bootstrap in your project from NPM:

npm install --save @ng-bootstrap/ng-bootstrap
In your app.module.ts you need to import the NgbModule.forRoot() using the forRoot() method.

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [ NgbModule.forRoot(), ... ],  
  // ...
})
export class AppModule {}
If you have feature modules in your application, you also need to import NgbModule, but without the forRoot() method:

Other modules in your application can simply import NgbModule:

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
 // ...
  imports: [NgbModule, ...], 
})
export class OtherModule {
}


npm install font-awesome --save

In the angular-cli.json file locate the styles[] array and add font-awesome references directory here, like below:

"apps": [
          {
             "root": "src",
             "outDir": "dist",
             ....
             "styles": [
                "styles.css",
                "../node_modules/bootstrap/dist/css/bootstrap.css",
                "../node_modules/font-awesome/css/font-awesome.css" // -here webpack will automatically build a link css element out of this!?
             ],
             ...
         }
       ]


],

https://embed.plnkr.co/ouX2zkGeeTOroZF2COfC/

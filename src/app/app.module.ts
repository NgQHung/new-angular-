import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModuleComponent } from './module/module.component';
import { OnSalePipe } from './on-sale.pipe';
import { OnworkingPipe } from './onworking.pipe';
import { OnWorkingPipe } from './on-working.pipe';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirective } from './Directive/highlight.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModuleComponent,
    OnSalePipe,
    OnworkingPipe,
    OnWorkingPipe,
    ProductComponent,
    PageNotFoundComponent,
    HighlightDirective,
    TemplateDrivenFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

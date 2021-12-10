import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistreComponent } from './registre/registre.component';
import { AuthInterceptot } from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RegistreComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptot,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

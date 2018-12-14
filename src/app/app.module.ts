import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule} from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { Login } from './login/login.component';
import { Register } from './register/register.component';
import { Forgot } from './forgot/forgot.component';
import { Home } from './home/home.component';
import { ChangePwd } from './changepwd/change.component';
import { Query } from './query/query.component';
import { PieChart } from './piechart/piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    Login,
    Register,
    Forgot,
    Home,
    ChangePwd,
    Query,
    PieChart
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

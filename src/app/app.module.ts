import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TeamComponent } from './pages/team/team.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { ProductsComponent } from './pages/products/products.component';
import { CashoutComponent } from './pages/cashout/cashout.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    MainComponent,
    TodoListComponent,
    TeamComponent,
    NavbarComponent,
    CashoutComponent,
    InstructionsComponent,
    ProductsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

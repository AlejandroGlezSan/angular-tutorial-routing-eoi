import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashoutComponent } from './pages/cashout/cashout.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';

import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';
import { TeamComponent } from './pages/team/team.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'team', component: TeamComponent },
  { path: 'kanban', component: TodoListComponent },
  { path: 'cashout', component: CashoutComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}

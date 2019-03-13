import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// good for adding routes to app
import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountComponent } from './account/account.component';
import { PopularItemsComponent } from './popular-items/popular-items.component';
import { ItemComponent } from './item/item.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { MarginsDirective } from './margins.directive';
import { ResultpageComponent } from './resultpage/resultpage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'account', component: AccountComponent},
  {path: 'item/:itemKey', component:ItemPageComponent},
  {path: 'result/:term', component:ResultpageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AccountComponent,
    PopularItemsComponent,
    ItemComponent,
    ItemPageComponent,
    MarginsDirective,
    ResultpageComponent
  ],
  imports: [
    BrowserModule,
        // apply routes here
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

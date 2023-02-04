import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from "@ngrx/store";
import modules from "./redux";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {FormsModule} from "@angular/forms";

// modules
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from "@angular/common/http";

// redux

// components
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SelectComponent } from './components/select/select.component';
import { HeaderItemComponent } from './components/header-item/header-item.component';
import { MenuComponent } from './components/menu/menu.component';

// containers
import { LoginComponent } from './conteiners/login/login.component';
import { RegisterComponent } from './conteiners/register/register.component';
import { BoardComponent } from './conteiners/board/board.component';
import { NewCategoryComponent } from './conteiners/new-category/new-category.component';
import { NewItemComponent } from './conteiners/new-item/new-item.component';
import {categoryReducer} from "./redux/category/category.reducer";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    ButtonComponent,
    RegisterComponent,
    LoadingComponent,
    BoardComponent,
    SelectComponent,
    HeaderItemComponent,
    MenuComponent,
    NewCategoryComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      category: categoryReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    FormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

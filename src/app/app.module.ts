import { NgModule, LOCALE_ID, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponentComponent } from './components-ancients/mon-premier-component/mon-premier-component.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

import { AppareilService } from "./services/appareil.service";
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './components-ancients/single-appareil/single-appareil.component';
import { FourOhFourComponent } from './fenetres/four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './components-ancients/edit-appareil/edit-appareil.component';
import { UserListComponent } from './auth/components/user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './auth/components/new-user/new-user.component';
import { HeaderComponent } from './fenetres/header/header.component';
import { TreeViewComponent } from './fenetres/tree-view/tree-view.component';
import { NegociantListComponent } from './components/negociants/negociant-list/negociant-list.component';
import { SingleNegociantComponent } from './components/negociants/single-negociant/single-negociant.component';
import { NouveauxTarifsComponent } from './fenetres/nouveaux-tarifs/nouveaux-tarifs.component';
import { NegociantsService } from './services/negociants.service';
import { FilterService, GridModule, PagerModule, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { OffreListComponent } from './components/tableau-offres2/offre-list/offre-list.component';
import { SingleOffreComponent } from './components/tableau-offres2/offre-list/single-offre/single-offre.component';
import { DetailOffreComponent } from './components/tableau-offres2/offre-list/detail-offre/detail-offre.component';
import { AppareilViewComponent } from './components-ancients/appareil-view/appareil-view.component';
import { AppareilComponent } from './components-ancients/appareil/appareil.component';
import { TableauNegociantsComponent } from './components/negociants/tableau-negociants/tableau-negociants.component';
import { FenetreDeTestComponent } from './fenetres/fenetre-de-test/fenetre-de-test.component';
import { TableauOffresComponent } from './components/tableau-offres/tableau-offres.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'edit', component: EditAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },

  { path: 'nouveaux-tarifs', component: NouveauxTarifsComponent },
  // { path: 'tableau-offres', component: TableauOffresComponent },

  { path: 'fenetre-test', component: FenetreDeTestComponent },

  //Mettre toujours cette partie à la fin
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponentComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent,
    HeaderComponent,
    TreeViewComponent,
    NegociantListComponent,
    SingleNegociantComponent,
    OffreListComponent,
    SingleOffreComponent,
    DetailOffreComponent,
    NouveauxTarifsComponent,
    TableauNegociantsComponent,
    FenetreDeTestComponent,

    TableauOffresComponent,

    TableauNegociantsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    GridModule,
    PagerModule,

    //Importation pour les tableaux
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService,
    NegociantsService,
    PageService,
    SortService,
    FilterService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

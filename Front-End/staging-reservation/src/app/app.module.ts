import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormReserverComponent } from './form-reserver/form-reserver.component';
// import { FormulaireReserverComponent } from './formulaire-reserver/formulaire-reserver.component';
import { ServeurLibreComponent } from './serveur-libre/serveur-libre.component';
import { ServeursComponent } from './serveurs/serveurs.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HttpClientModule} from '@angular/common/http';
import { RubyService } from 'services/ruby.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateServeurComponent } from './update-serveur/update-serveur.component';
import { ServersDetailsComponent } from './servers-details/servers-details.component';
import { DeleteServeurComponent } from './delete-serveur/delete-serveur.component';
import { NewServerComponent } from './new-server/new-server.component';

@NgModule({
  declarations: [
    AppComponent,
    FormReserverComponent,
    ServeurLibreComponent,
    ServeursComponent,
    HistoriqueComponent,
    UpdateServeurComponent,
    ServersDetailsComponent,
    DeleteServeurComponent,
    NewServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RubyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

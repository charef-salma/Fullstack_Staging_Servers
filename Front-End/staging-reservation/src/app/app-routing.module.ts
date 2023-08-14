import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServeursComponent } from './serveurs/serveurs.component';
import { ServeurLibreComponent } from './serveur-libre/serveur-libre.component';
import { FormReserverComponent } from'./form-reserver/form-reserver.component';
import { UpdateServeurComponent } from './update-serveur/update-serveur.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ServersDetailsComponent } from './servers-details/servers-details.component';
import { NewServerComponent } from './new-server/new-server.component';

const routes: Routes = [

{
 path:'servers',component:ServeursComponent,

},
{
  path:'libere/:serveurId', component: ServeurLibreComponent
},
{
  path :'booking/:serveurId',component:FormReserverComponent
},
{
 path: 'update/:serveurId',component: UpdateServeurComponent
},
{
  path:'historique',component:HistoriqueComponent
},
{
  path:'details/:serveurId',component:ServersDetailsComponent
},
{
  path:'Update_server',component:UpdateServeurComponent
},
{
  path:'New_server',component:NewServerComponent
},
{
  path:'delete_server',component:NewServerComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

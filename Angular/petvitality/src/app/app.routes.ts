import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { VeterinariaComponent } from './components/veterinaria/veterinaria.component';
const tituloProyecto = "PET VITALY"
export const routes: Routes = [
  { path: '', title: `Inicio | ${tituloProyecto}`, component: InicioComponent },
  { path: 'contacto', title: `Contáctanos | ${tituloProyecto}`, component: ContactoComponent },
  { path: 'tienda', title: `Nuestros Productos | ${tituloProyecto}`, component: TiendaComponent },
  { path: 'veterinaria', title: `Veterinaria - Urgencias | ${tituloProyecto}`, component: VeterinariaComponent },
];

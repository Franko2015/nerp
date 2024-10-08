import { Routes } from '@angular/router';
import { SettingsComponent } from './admin/settings/settings.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { VentasComponent } from './modulos/contabilidad/ventas/ventas.component';
import { ContabilidadComponent } from './modulos/contabilidad/contabilidad.component';
import { ComprasComponent } from './modulos/contabilidad/compras/compras.component';
import { TrabajadoresComponent } from './modulos/CRM/trabajadores/trabajadores.component';
import { SueldosComponent } from './modulos/CRM/sueldos/sueldos.component';
import { PermisosComponent } from './modulos/CRM/permisos/permisos.component';
import { ContratosComponent } from './modulos/CRM/contratos/contratos.component';
import { AsistenciaComponent } from './modulos/CRM/asistencia/asistencia.component';
import { StockComponent } from './modulos/inventario/stock/stock.component';
import { ProductosComponent } from './modulos/inventario/productos.component';
import { FinancierosComponent } from './modulos/informes/financieros/financieros.component';
import { ProduccionComponent } from './modulos/informes/produccion/produccion.component';

export const routes: Routes = [
    {
        path: 'admin', children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'support', component: AdminComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    }, {
        path: 'contabilidad', children: [
            { path: '**', redirectTo: 'home', pathMatch: 'full' },
            { path: 'ventas', component: VentasComponent },
            { path: 'home', component: ContabilidadComponent },
            { path: 'compras', component: ComprasComponent }
        ],
    },{
        path: 'crm', children: [
            { path: 'asistencia', component: AsistenciaComponent },
            { path: 'contratos', component: ContratosComponent },
            { path: 'permisos', component: PermisosComponent },
            { path: 'sueldos', component: SueldosComponent },
            { path: 'trabajadores', component: TrabajadoresComponent }
        ],
    },{
        path: 'produccion', children: [
            { path: 'cosechas', component: AsistenciaComponent },
            { path: 'informes', component: ContratosComponent },
            { path: 'permisos', component: PermisosComponent },
            { path: 'sueldos', component: SueldosComponent },
            { path: 'trabajadores', component: TrabajadoresComponent }
        ],
    },{
        path: 'inventario', children: [
            { path: 'compras', component: ComprasComponent },
            { path: 'stock', component: StockComponent },
            { path: 'productos', component: ProductosComponent },
        ],
    },{
        path: 'informes', children: [
            { path: 'ventas', component: VentasComponent },
            { path: 'financieros', component: FinancierosComponent },
            { path: 'produccion', component: ProduccionComponent },
        ],
    },

    
    // Ruta por defecto al iniciar la aplicación
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
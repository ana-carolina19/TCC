import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introducao',
    pathMatch:'full',
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./telasIniciais/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./telasIniciais/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'introducao',
    loadChildren: () => import('./telasIniciais/introducao/introducao.module').then( m => m.IntroducaoPageModule)
  },
  {
    path: 'login-cadastro',
    loadChildren: () => import('./telasIniciais/login-cadastro/login-cadastro.module').then( m => m.LoginCadastroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

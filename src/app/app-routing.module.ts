import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'sampleeeee',
    loadChildren: () => import('./components/sample/sample.module').then(m => m.SampleModule),
  },
  {
    path: 'sample2',
    loadChildren: () => import('./components/sample2/sample2.module').then(m => m.Sample2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

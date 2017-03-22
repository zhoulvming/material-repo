import { NgModule } from '@angular/core'
import { Routes, RouterModule }   from '@angular/router'



// pages
import { HomePage } from './pages/home'
import { NoContentPage } from './pages/no-content'
import { IconEditPage } from './pages/icon.edit'

const routes: Routes = [
	{ path: '', component: HomePage }
	,{ path: 'home', component: HomePage}

	,{ path: 'icon/edit/:id', component: IconEditPage}
	// { path: 'upload/code', component: componentNewPage},
  // { path: 'all/icon', component: iconAllPage},
	// { path: 'edit/icon', component: iconEditPage},
	// { path: 'edit/icon', component: iconLibraryPage},
	// { path: 'edit/icon', component: iconDetailslibraryPage},
	// { path: 'edit/icon', component: iconNewPage},


	// 该path一定要放在最后，否则导致其他path全被截获
	,{ path: '**',    component: NoContentPage }
];

/**
 * { useHash: true } 设置的作用是避免与node服务的url冲突，
 * 导致刷新时候不走客户端路由而去请求服务端
 * 
 * @export
 * @class AppRoutingModule
 */
@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
	providers: [],
})
export class AppRoutingModule { }

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { UpdatePostComponent } from './components/posts/update-post/update-post.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';

@NgModule({
  declarations: [
    PagesComponent,
    PostsComponent,
    UpdatePostComponent,
    PostDetailsComponent,
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class PagesModule { }

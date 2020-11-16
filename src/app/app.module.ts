import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { NotificationComponent } from './notification/notification.component';
import { MessageComponent } from './message/message.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoriesComponent } from './home/stories/stories.component';
import { PostsComponent } from './home/posts/posts.component';
import { StoryComponent } from './home/stories/story/story.component';
import { PostComponent } from './home/posts/post/post.component';
import { AddPostComponent } from './home/posts/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    NotificationComponent,
    MessageComponent,
    NavBarComponent,
    StoriesComponent,
    PostsComponent,
    StoryComponent,
    PostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

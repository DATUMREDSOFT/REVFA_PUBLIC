import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { NavService } from './services/nav.service';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookmarkComponent } from './components/header/bookmark/bookmark.component';
import { NotificationComponent } from './components/header/notification/notification.component';
import { MaximizeComponent } from './components/header/maximize/maximize.component';
import { ModeComponent } from './components/header/mode/mode.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/header/search/search.component';
import { ChatComponent } from './components/header/chat/chat.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { UserInfoComponent } from './components/sidebar/user-info/user-info.component';
import {DecimalPipe} from '@angular/common';
import { FullComponent } from './components/layout/full/full.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ClockComponent } from './components/clock/clock.component';
import { HomeModule } from '../components/home/home.module';
import { MigasComponent } from '../components/home/utils/migas/migas.component';

 
@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    BreadcrumbComponent,
    TapToTopComponent,
    FooterComponent,
    BookmarkComponent,
    NotificationComponent,
    MaximizeComponent,
    ModeComponent,
    SearchComponent,
    ChatComponent,
    FeatherIconsComponent,
    UserInfoComponent,
    FullComponent,
    LoaderComponent,
    ClockComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HomeModule
    
  ],
  providers: [
    NavService,
    DecimalPipe,
  ],
  exports: [
    RouterModule,
    BreadcrumbComponent,
    TapToTopComponent,
    ContentComponent,
    FeatherIconsComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }

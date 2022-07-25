import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './common/common.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    CommonComponent,
    SidenavComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}

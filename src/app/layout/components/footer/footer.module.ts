import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FooterComponent } from 'app/layout/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        FuseSharedModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FuseDirectivesModule } from '@fuse/directives/directives';
import { FuseSidebarModule } from '@fuse/components/sidebar/sidebar.module';

import { FuseThemeOptionsComponent } from '@fuse/components/theme-options/theme-options.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    declarations: [
        FuseThemeOptionsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,

        FuseDirectivesModule,
        FuseSidebarModule
    ],
    exports: [
        FuseThemeOptionsComponent
    ]
})
export class FuseThemeOptionsModule {
}

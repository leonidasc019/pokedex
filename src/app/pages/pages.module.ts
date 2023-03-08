import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Rounting
import { RountingModule } from './routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

//Modules
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        RountingModule,
        SharedModule
    ]
})
export class PagesModule { }

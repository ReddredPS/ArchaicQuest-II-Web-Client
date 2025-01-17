import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { WindowComponent } from './window/window.component';
import { InputComponent } from './input/input.component';
import { Safe } from '../_shared/pipes/safe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpService } from '../_shared/http.service';
import { clientRoutes } from './client.routes';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StatComponent } from './stat-bar/stat-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TabDirective } from '../_shared/directives/tab-directive';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
@NgModule({
    declarations: [
        ClientComponent,
        WindowComponent,
        InputComponent,
        StatComponent,
        Safe,
        TabDirective
    ],
    entryComponents: [
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        RouterModule.forChild(clientRoutes),
        CommonModule,
        MatTabsModule,
        MatSnackBarModule,
        ScrollingModule,
        MatAutocompleteModule,
        MatExpansionModule

    ],
    providers: [HttpService],

})
export class ClientModule { }

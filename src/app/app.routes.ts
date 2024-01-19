import { Routes } from '@angular/router';
import { NewCustomerRegistrationComponent } from './new-customer-registration/new-customer-registration.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TestsComponent } from './tests/tests.component';
import { AddTestComponent } from './tests/add-test/add-test.component';
import { ShowAllTestComponent } from './tests/show-all-test/show-all-test.component';
import { DiagnosisHomeComponent } from './Diagnostic_Center/diagnosis-home/diagnosis-home.component';
import { AddDiagnosisComponent } from './Diagnostic_Center/add-diagnosis/add-diagnosis.component';
import { ShowDiagnosisComponent } from './Diagnostic_Center/show-diagnosis/show-diagnosis.component';

export const routes: Routes = [
    
    {path:'', component: LoginPageComponent},
    {path:'newCustomerReg', component: NewCustomerRegistrationComponent},
    {path:'adminDash', component: AdminDashboardComponent},
    {path:'testpage',component:TestsComponent},
    {path:'addTest',component:AddTestComponent},
    {path:'showTest',component:ShowAllTestComponent},
    {path:'diagnoHome',component:DiagnosisHomeComponent},

    
    {path:'addDiagno',component:AddDiagnosisComponent},
    {path:'showDiagno',component:ShowDiagnosisComponent}
    



];

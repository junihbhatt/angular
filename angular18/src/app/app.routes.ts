import { Routes } from '@angular/router';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { StructuralComponent } from './components/structural/structural.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PostApiComponent } from './components/post-api/post-api.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmpComponent
    },
    {
        path: 'data-binding',
        component: DatabindingComponent
    },
    {
        path: 'emp-list',
        component: EmpListComponent
    },
    {
        path: 'structural',
        component: StructuralComponent
    },
    {
        path: 'if-else',
        component: IfelseComponent
    },
    {
        path: 'temp-form',
        component: TemplateFormComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveFormComponent
    },
    {
        path: 'get-api',
        component: GetApiComponent
    },
    {
        path: 'post-api',
        component: PostApiComponent
    }
];

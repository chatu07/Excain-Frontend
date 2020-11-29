import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
//import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
//import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { CaseStudiesThreeColumnsPageComponent } from './components/pages/case-studies-three-columns-page/case-studies-three-columns-page.component';
//import { HomepageOneComponent } from './components/pages/homepage-one/homepage-one.component';
//import { HomepageTwoComponent } from './components/pages/homepage-two/homepage-two.component';
//import { HomepageThreeComponent } from './components/pages/homepage-three/homepage-three.component';
import { HomepageFourComponent } from './components/pages/homepage-four/homepage-four.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
//import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
//import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { CaseStudiesDetailsPageComponent } from './components/pages/case-studies-details-page/case-studies-details-page.component';
//import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
//import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
import { CoursesPageComponent } from './components/pages/courses-page/courses-page.component';
import { CoursesDetailsPageComponent } from './components/pages/courses-details-page/courses-details-page.component';
import { ApplicationStateService } from './application-state.service';

const Dekstop_routes: Routes = [
    {path: 'home', component: HomepageFourComponent},
    {path: 'about-us', component: AboutPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'services/:id', component: ServicesDetailsPageComponent},
    {path: 'courses', component: CoursesPageComponent},
    {path: 'courses/:id', component: CoursesDetailsPageComponent},
    {path: 'case-studies', component: CaseStudiesThreeColumnsPageComponent},
    {path: 'case-studies/:id', component: CaseStudiesDetailsPageComponent},
    {path: 'error', component: ErrorPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'contact', component: ContactPageComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: '**', component: ErrorPageComponent}
];
//{useHash: true}
@NgModule({
    imports: [RouterModule.forRoot(Dekstop_routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

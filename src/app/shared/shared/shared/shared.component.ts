/**
 * Component that renders the lazy loaded sections in the page
 * Last loaded section is obtained through LoadCheckService
 * Initially header component is loaded and once it is rendered, subsequent components are loaded.
 * If lazy loading to be done with routing, remove all code in ngOnInit() and ngDoCheck()
 * and remove all viewChild
 */

import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LoadCheckService } from 'src/app/services/load-check.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  @ViewChild('headerContainer', { read: ViewContainerRef })
  headerContainer!: ViewContainerRef;
  @ViewChild('homeContainer', { read: ViewContainerRef })
  homeContainer!: ViewContainerRef;
  @ViewChild('offerContainer', { read: ViewContainerRef })
  offerContainer!: ViewContainerRef;
  @ViewChild('contentContainer', { read: ViewContainerRef })
  contentContainer!: ViewContainerRef;
  @ViewChild('mediaContainer', { read: ViewContainerRef })
  mediaContainer!: ViewContainerRef;
  @ViewChild('supportContainer', { read: ViewContainerRef })
  supportContainer!: ViewContainerRef;
  @ViewChild('testimonialContainer', { read: ViewContainerRef })
  testimonialContainer!: ViewContainerRef;
  @ViewChild('footerContainer', { read: ViewContainerRef })
  footerContainer!: ViewContainerRef;
  
  constructor(public LoadCheckService: LoadCheckService) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    import('../../../components/header/header.component').then((comp) => {
      const component = comp['HeaderComponent'];
      this.headerContainer.createComponent(component);
    });
    this.LoadCheckService.setCurrentSegment("home");
  }
  ngDoCheck() {
    let lastLoadedSeg = this.LoadCheckService.getCurrentSegment();
    switch (lastLoadedSeg) {
      case 'header': import('../../../components/home/home.component').then((comp) => {
        const component = comp['HomeComponent'];
        this.homeContainer.createComponent(component);
      });
        this.LoadCheckService.setCurrentSegment('home');
        break;
      case 'home': import('../../../components/offer/offer.component').then((comp) => {
        const component = comp['OfferComponent'];
        this.offerContainer.createComponent(component);
      });
        this.LoadCheckService.setCurrentSegment('offer');
        break;
      case 'offer': import('../../../components/content/content.component').then((comp) => {
        const component = comp['ContentComponent'];
        this.contentContainer.createComponent(component);
      });
        this.LoadCheckService.setCurrentSegment('content');
        break;
      case 'content': import('../../../components/media/media.component').then((comp) => {
        const component = comp['MediaComponent'];
        this.mediaContainer.createComponent(component);
      });
        this.LoadCheckService.setCurrentSegment('media');
        break;
      case 'media': import('../../../components/support/support.component').then((comp) => {
        const component = comp['SupportComponent'];
        this.supportContainer.createComponent(component);
      });
        this.LoadCheckService.setCurrentSegment('testimonials');
        break;
      case 'testimonials': import('../../../components/testimonial/testimonial.component').then((comp) => {
        const component = comp['TestimonialComponent'];
        this.testimonialContainer.createComponent(component);
      });
        this.LoadCheckService.setCurrentSegment('footer');
        break;
      case 'footer': import('../../../components/footer/footer.component').then((comp) => {
        const component = comp['FooterComponent'];
        this.footerContainer.createComponent(component);
      });
        this.LoadCheckService.setCurrentSegment('');
        break;
    }
  }

}

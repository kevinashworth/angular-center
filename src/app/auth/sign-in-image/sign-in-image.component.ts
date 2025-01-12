import { Component, OnInit, OnDestroy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { LocalStorageService } from '../../services/local-storage.service';
import { flags } from '../../../environments/features';

@Component({
  selector: 'app-sign-in-image',
  imports: [],
  animations: [
    trigger('showSignInImageTrigger', [
      transition(':enter', [style({ opacity: 0 }), animate('200ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('150ms', style({ opacity: 0 }))])
    ])
  ],
  templateUrl: './sign-in-image.component.html'
})
export class SignInImageComponent implements OnInit, OnDestroy {
  showSignInImage = false;
  private breakpointSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointSubscription = this.breakpointObserver
      .observe('only screen and (min-width: 1024px) and (min-height: 768px)')
      .subscribe((result) => {
        this.showSignInImage = result.matches;
      });
  }

  imageError = 0;

  signInImages = [
    'images/signin-business-owner-01.png',
    'images/signin-business-owner-02.png',
    // "images/signin-business-owner-03.png",
    'images/signin-business-owner-04.png'
  ];
  signInImageIndex = 0;

  imageStorage = new LocalStorageService('image');

  incrementImageIndex() {
    const nextImageIndex = (this.signInImageIndex + 1) % this.signInImages.length;
    this.imageStorage.setNumber('signInImageIndex', nextImageIndex);
    this.signInImageIndex = nextImageIndex;
    flags.debug && console.log('incrementImageIndex', { nextImageIndex });
  }

  // if an image fails to load, increment index to try again.
  // try as many times as the length of the images array.
  handleError() {
    if (this.imageError < this.signInImages.length) {
      this.incrementImageIndex();
    }
    this.imageError++;
    console.error('[sign-in-image] error', { imageError: this.imageError });
  }

  ngOnInit() {
    this.signInImageIndex = this.imageStorage.getNumber('signInImageIndex');
    flags.debug && console.log('ngOnInit', { signInImages: this.signInImages, imageIndex: this.signInImageIndex });
  }

  ngOnDestroy() {
    this.breakpointSubscription.unsubscribe();
    this.showSignInImage = false;
    this.incrementImageIndex();
  }
}

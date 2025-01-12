import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignInImageComponent } from './sign-in-image.component';

describe('SignInImageComponent', () => {
  let component: SignInImageComponent;
  let fixture: ComponentFixture<SignInImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInImageComponent, BrowserAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

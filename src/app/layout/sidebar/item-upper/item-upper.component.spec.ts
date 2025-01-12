import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ItemUpperComponent } from './item-upper.component';

describe('ItemUpperComponent', () => {
  let component: ItemUpperComponent;
  let fixture: ComponentFixture<ItemUpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemUpperComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct icon based on icon input', () => {
    const icon = 'settings';
    component.icon = icon;
    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const iconElement = compiled.querySelector('ng-icon');

    expect(iconElement).toBeTruthy();
    expect(iconElement?.getAttribute('ng-reflect-name')).toEqual(component.components[icon]);
  });

  it('should use default icon when initialized', () => {
    const iconElement = fixture.nativeElement.querySelector('ng-icon');
    expect(iconElement?.getAttribute('ng-reflect-name')).toEqual('heroChartPieSolid');
  });

  it('should map different icons correctly', () => {
    const testCases = [
      { input: 'settings', expected: 'heroCog8ToothSolid' },
      { input: 'customers', expected: 'heroUsersSolid' },
      { input: 'campaign', expected: 'campaign' },
      { input: 'campaigns', expected: 'campaign' },
      { input: 'profile', expected: 'heroMapPinSolid' },
      { input: 'dashboard', expected: 'heroChartPieSolid' }
    ];

    testCases.forEach(({ input, expected }) => {
      component.icon = input;
      component.ngOnInit();
      fixture.detectChanges();

      const iconElement = fixture.nativeElement.querySelector('ng-icon');
      expect(iconElement?.getAttribute('ng-reflect-name')).toEqual(expected);
    });
  });

  it('should keep default icon for invalid icon name', () => {
    component.icon = 'nonexistent';
    component.ngOnInit();
    fixture.detectChanges();

    const iconElement = fixture.nativeElement.querySelector('ng-icon');
    expect(iconElement?.getAttribute('ng-reflect-name')).toEqual('heroChartPieSolid');
  });

  it('should have default path of /dashboard', () => {
    expect(component.path).toEqual('/dashboard');
  });

  it('should update path when input changes', () => {
    const newPath = '/settings';
    component.path = newPath;
    fixture.detectChanges();
    expect(component.path).toEqual(newPath);
  });
});

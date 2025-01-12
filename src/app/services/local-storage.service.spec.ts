import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

const testKey = 'testKey';
const testValue = 'testValue'; // { data: 'test' };

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService, { provide: String, useValue: 'test' }]
    });
    service = TestBed.inject(LocalStorageService);
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get items from localStorage', () => {
    service.setItem(testKey, testValue);
    const retrieved = service.getItem(testKey);

    expect(retrieved).toEqual(testValue);
  });

  it('should remove items from localStorage', () => {
    service.setItem(testKey, testValue);
    service.removeItem(testKey);

    expect(service.getItem(testKey)).toBeNull();
  });

  it('should clear all items from localStorage', () => {
    service.setItem('key1', 'value1');
    service.setItem('key2', 'value2');

    service.clear();

    expect(service.getItem('key1')).toBeNull();
    expect(service.getItem('key2')).toBeNull();
  });
});

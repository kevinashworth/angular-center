// Mock localStorage for tests
const mockLocalStorage = {
  getItem: (key: string): string | null => null,
  setItem: (key: string, value: string): void => {},
  removeItem: (key: string): void => {},
  clear: (): void => {},
  length: 0,
  key: (index: number): string | null => null
};

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

// Required for Angular Material
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop: string) => ''
  })
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});

Object.defineProperty(window, 'CSS', { value: null });

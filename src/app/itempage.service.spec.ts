import { TestBed } from '@angular/core/testing';

import { ItempageService } from './itempage.service';

describe('ItempageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItempageService = TestBed.get(ItempageService);
    expect(service).toBeTruthy();
  });
});

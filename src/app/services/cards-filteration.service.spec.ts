import { TestBed } from '@angular/core/testing';

import { CardsFilterationService } from './cards-filteration.service';

describe('CardsFilterationService', () => {
  let service: CardsFilterationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsFilterationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TrendMovieService } from './trend-movie.service';

describe('TrendMovieService', () => {
  let service: TrendMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

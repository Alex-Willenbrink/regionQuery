import { TestBed, inject } from '@angular/core/testing';

import { GeneticQueriesService } from './genetic-queries.service';

describe('GeneticQueriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneticQueriesService]
    });
  });

  it('should be created', inject([GeneticQueriesService], (service: GeneticQueriesService) => {
    expect(service).toBeTruthy();
  }));
});

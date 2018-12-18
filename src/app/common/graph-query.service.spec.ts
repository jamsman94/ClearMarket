import { TestBed } from '@angular/core/testing';

import { GraphQueryService } from './graph-query.service';

describe('GraphQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphQueryService = TestBed.get(GraphQueryService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, async, inject } from '@angular/core/testing';

import { ReportGuard } from './report.guard';

describe('ReportGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportGuard]
    });
  });

  it('should ...', inject([ReportGuard], (guard: ReportGuard) => {
    expect(guard).toBeTruthy();
  }));
});

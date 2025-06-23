import { TestBed } from '@angular/core/testing';
import { CountdownService } from './countdown.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CountdownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountdownService],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(CountdownService);
    expect(service).toBeTruthy();
  });
});

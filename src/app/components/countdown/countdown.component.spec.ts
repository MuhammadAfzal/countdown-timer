import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownComponent } from './countdown.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountdownService } from 'src/app/services/countdown.service';

describe('CountdownComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CountdownComponent],
      providers: [
        CountdownService,
        importProvidersFrom(HttpClientTestingModule),
      ],
    });
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

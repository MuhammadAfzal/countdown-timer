import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [importProvidersFrom(HttpClientTestingModule)],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'countdown-timer' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('countdown-timer');
  });
});

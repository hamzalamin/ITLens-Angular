import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysEditionsListComponent } from './surveys-editions-list.component';

describe('SurveysEditionsListComponent', () => {
  let component: SurveysEditionsListComponent;
  let fixture: ComponentFixture<SurveysEditionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveysEditionsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveysEditionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

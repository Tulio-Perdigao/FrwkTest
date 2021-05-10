import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedpostComponent } from './detailedpost.component';

describe('DetailedpostComponent', () => {
  let component: DetailedpostComponent;
  let fixture: ComponentFixture<DetailedpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

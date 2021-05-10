import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedalbumComponent } from './detailedalbum.component';

describe('DetailedalbumComponent', () => {
  let component: DetailedalbumComponent;
  let fixture: ComponentFixture<DetailedalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

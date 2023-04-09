import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalalListComponent } from './halal-list.component';

describe('HalalListComponent', () => {
  let component: HalalListComponent;
  let fixture: ComponentFixture<HalalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

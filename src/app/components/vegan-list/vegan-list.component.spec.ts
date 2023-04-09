import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganListComponent } from './vegan-list.component';

describe('VeganListComponent', () => {
  let component: VeganListComponent;
  let fixture: ComponentFixture<VeganListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeganListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeganListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

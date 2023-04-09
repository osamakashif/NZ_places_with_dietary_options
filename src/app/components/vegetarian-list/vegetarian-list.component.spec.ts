import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetarianListComponent } from './vegetarian-list.component';

describe('VegetarianListComponent', () => {
  let component: VegetarianListComponent;
  let fixture: ComponentFixture<VegetarianListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetarianListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetarianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

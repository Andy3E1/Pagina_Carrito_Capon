import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcomprasComponent } from './pcompras.component';

describe('PcomprasComponent', () => {
  let component: PcomprasComponent;
  let fixture: ComponentFixture<PcomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcomprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetopicsComponent } from './managetopics.component';

describe('ManagetopicsComponent', () => {
  let component: ManagetopicsComponent;
  let fixture: ComponentFixture<ManagetopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagetopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailerComponent } from './userdetailer.component';

describe('UserdetailerComponent', () => {
  let component: UserdetailerComponent;
  let fixture: ComponentFixture<UserdetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

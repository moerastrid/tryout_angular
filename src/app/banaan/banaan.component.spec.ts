import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanaanComponent } from './banaan.component';

describe('BanaanComponent', () => {
  let component: BanaanComponent;
  let fixture: ComponentFixture<BanaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanaanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

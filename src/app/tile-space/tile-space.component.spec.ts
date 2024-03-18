import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileSpaceComponent } from './tile-space.component';

describe('TileSpaceComponent', () => {
  let component: TileSpaceComponent;
  let fixture: ComponentFixture<TileSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TileSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TileSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

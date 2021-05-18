import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RankModalComponent } from './rank-modal.component';

describe('RankModalComponent', () => {
  let component: RankModalComponent;
  let fixture: ComponentFixture<RankModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RankModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

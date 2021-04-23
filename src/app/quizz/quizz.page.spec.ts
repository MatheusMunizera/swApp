import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizzPage } from './quizz.page';

describe('QuizzPage', () => {
  let component: QuizzPage;
  let fixture: ComponentFixture<QuizzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

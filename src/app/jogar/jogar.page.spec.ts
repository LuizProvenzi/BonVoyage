import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JogarPage } from './jogar.page';

describe('JogarPage', () => {
  let component: JogarPage;
  let fixture: ComponentFixture<JogarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JogarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

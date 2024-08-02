import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../../store/reducer';
import { DashboardComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../../shared/services/api.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [StoreModule.forRoot({ app: appReducer }), HttpClientTestingModule],
      providers: [ApiService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display posts', waitForAsync(() => {
    component.products$ = of([{ id: 1, title: 'Test Product' }]);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const posts = fixture.nativeElement.querySelectorAll('p'); // Change 'p' to the actual tag used in your component
      expect(posts.length).toBe(1);
      expect(posts[0].textContent).toContain('Test Product');
    });
  }));
});
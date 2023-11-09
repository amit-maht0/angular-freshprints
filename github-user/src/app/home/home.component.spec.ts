import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GitHubUserService } from '../app.service';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let gitHubService: GitHubUserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data from localStorage when ngOnInit is called', () => {
    const userData = {
      id: 1,
      profilePic: 'https://example.com/avatar.png',
      userName: 'testuser',
      name: 'Test User',
    };
    const localStorageKey = 'gitHubHistory';

    // Simulate stored data in localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(userData));

    component.ngOnInit();

    // Adjust the expectation to match the actual structure
    const expectedData = userData;
    expect(component.gitHubData).toEqual(expectedData);
  });
});

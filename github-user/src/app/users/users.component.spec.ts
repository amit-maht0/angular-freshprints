import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data from localStorage when ngOnInit is called', () => {
    const userData = {
      id: 1,
      avatar_url: 'https://example.com/avatar.png',
      login: 'testuser',
      name: 'Test User',
    };
    const localStorageKey = 'gitHubHistory';

    localStorage.setItem(localStorageKey, JSON.stringify(userData));

    component.ngOnInit();

    expect(component.gitHubData).toEqual([userData]);
  });

  it('should clear localStorage and reload the page when clearLocalStorage is called', () => {
    const localStorageKey = 'gitHubHistory';
    localStorage.setItem(localStorageKey, JSON.stringify({}));

    spyOn(localStorage, 'clear');

    component.clearLocalStorage();

    expect(localStorage.clear).toHaveBeenCalled();
    // You can add more expectations for the Swal.fire and window.location.reload if needed
  });
});

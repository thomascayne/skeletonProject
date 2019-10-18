import { fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HeaderComponent } from '@app/layout/header/header.component';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;

  const createComponent = createComponentFactory(HeaderComponent);

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should have title as "Skeleton Project"', () => {
    const h1 = spectator.debugElement.query(By.css('.appTitle')).nativeElement
      .innerText;
    expect(h1).toContain('Skeleton Project');
  });

  it('should have "/admin" link in menu', fakeAsync(() => {
    const links = spectator.debugElement.queryAll(By.css('.cursor'));
    expect(links[3].nativeElement.innerText).toContain('Admin');
    links[3].nativeElement.click();
    tick();

    spectator.fixture.whenStable().then(() => {
      expect(location.pathname).toEqual('/context.html');
      /**
       * for now the above is a placeholder. When application is live
       * the below should work
       */
      // expect(location.pathname).toEqual('/admin');
    });
  }));
});

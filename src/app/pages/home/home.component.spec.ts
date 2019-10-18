import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { DataService } from '@app/core/data/data.service';
import { HomeComponent } from '@app/pages/home/home.component';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;

  const createComponent = createComponentFactory({
    component: HomeComponent,
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [DataService],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should have h1 tag as "HOME"', () => {
    const h1 = spectator.query('h1');

    expect(h1).toHaveText('HOME');
  });
});

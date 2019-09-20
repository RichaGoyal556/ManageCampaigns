import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTabsComponent } from './campaign-tabs.component';

describe('CampaignTabsComponent', () => {
  let component: CampaignTabsComponent;
  let fixture: ComponentFixture<CampaignTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

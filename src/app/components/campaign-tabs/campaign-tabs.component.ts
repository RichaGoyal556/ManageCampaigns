import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-tabs',
  templateUrl: './campaign-tabs.component.html',
  styleUrls: ['./campaign-tabs.component.scss']
})
export class CampaignTabsComponent implements OnInit {

  public upcomingCampaignData = [
    {
        date: '2019-10-02T09:40:00',
        lag: '12 days ahead',
        campaignDetails: {
            icon: '',
            name: 'Test Whatsapp',
            country: 'US'
        }
    },
    {
        date: '2019-09-22T09:40:00',
        lag: '2 days ahead',
        campaignDetails: {
            icon: '',
            name: 'Event 2',
            country: 'India'
        }
    },
    {
        date: '2020-09-20T09:40:00',
        lag: '365 days ahead',
        campaignDetails: {
            icon: '',
            name: 'Event 3',
            country: 'US, FR'
        }
    }
];
public liveCampaignData = [
  {
    date: '2019-09-20T09:40:00',
    lag: 'Today',
      campaignDetails: {
          icon: '',
          name: 'Event 2',
          country: 'US'
      }
  },
  {
      date: '2019-09-20T09:40:00',
      lag: 'Today',
      campaignDetails: {
          icon: '',
          name: 'Event 3',
          country: 'CA'
      }
  },
  {
    date: '2019-09-20T09:40:00',
    lag: 'Today',
      campaignDetails: {
          icon: '',
          name: 'Event 4- Drama',
          country: 'US, FR'
      }
  }
];
public pastCampaignData = [
  {
      date: '2019-09-12T09:40:00',
      lag: '8 days ago',
      campaignDetails: {
          icon: '',
          name: 'Event 1',
          country: 'US'
      }
  },
  {
      date: '2019-09-17T09:40:00',
      lag: '3 days ago',
      campaignDetails: {
          icon: '',
          name: 'Event 2',
          country: 'CA'
      }
  },
  {
      date: '2019-08-10T09:40:00',
      lag: '30 days ago',
      campaignDetails: {
          icon: '',
          name: 'Event- 5',
          country: 'US, FR'
      }
  },
  {
    date: '2019-08-18T09:40:00',
    lag: '32 days ago',
    campaignDetails: {
        icon: '',
        name: 'Event- Dance ballet',
        country: 'US, FR'
    }
}
];

  constructor() { }

  ngOnInit() {
  }

  onTabSelect(e) {
    
  }
}

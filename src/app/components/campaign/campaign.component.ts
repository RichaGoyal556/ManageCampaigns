import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  @Input() campaignData = {};
  public openCalendar = false;
  public openDetailsDialogue = false;
  public selectedEvent;

  constructor() { }

  ngOnInit() {
  }

  openDialog(item) {
    this.selectedEvent = item;
    this.openDetailsDialogue = true;
  }

  handleDateChange(date, item) {
    const date1 = new Date(date); // selected
    const date2 = new Date(); // existing
    const diffTime: number = (date1.getTime() - date2.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      item.lag = diffDays + 'days ahead';
    } else if (diffDays < 0) {
      item.lag = Math.abs(diffDays) + 'days ago';
    } else {
      item.lag = 'Today';
    }
    item.date = date1;
  }

  getDate(dateString) {
    return new Date(dateString);
  }

}

import { Component } from '@angular/core';
import { TrackerService } from '../services/tracker.service';
import { Package } from '../models/package.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  detailsVisible = false;
  package!: Package; // fixnout model
 
  constructor(private trackerService: TrackerService) {
  }
  
  getPackage(id: string) {
    this.trackerService.getPackage(id).subscribe((data) => {
      console.log(data)
      this.package = data;
    });
  }

  findPackage(event: CustomEvent) {
    const value = event.detail.value;

    if(!value) return

    this.getPackage(value);
  }

  toggleDetails() {
    this.detailsVisible = !this.detailsVisible;
  }
}

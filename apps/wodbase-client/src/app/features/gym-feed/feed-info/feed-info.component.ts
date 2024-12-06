import { Component, Input } from '@angular/core';
import { FeedInfo } from './feed-info';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-feed-info',
  imports: [MarkdownComponent],
  templateUrl: './feed-info.component.html',
  styleUrl: './feed-info.component.scss',
})
export class FeedInfoComponent {
  @Input() feedInfo!: FeedInfo;
}

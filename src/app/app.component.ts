import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge-output';

  onomatopeiaList: string[] = [""];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopeiaList.push(event);
  }
}

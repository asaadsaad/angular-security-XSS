import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  template: `
    <h3>Angular automatically applies XSS defenses</h3>
    
    <input #i (input)="null"/>
    <br />
    {{i.value}}
    
    {{hack}}
        
    <div [innerHTML]="hack"></div>
    <a [href]="hackURL">untrusted URL</a>

    <!--div-- [innerHTML]="sanitizer.bypassSecurityTrustHtml(hack)"></!--div-->
    <span>Security Demo</span>
  `,
})
export class AppComponent {
  hack = `<img src="a.png" onerror="alert(1)"/>`
  hackURL = `javascript:alert(1)`

  constructor(private sanitizer: DomSanitizer) { }
}

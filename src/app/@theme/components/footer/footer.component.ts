import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b>Arjun Singh</b> for <b>IQVIA</b> - Thanks to <b>ngx-admin</b> for providing the template</span>
    <div class="socials">
      <a href="https://github.com/Ajzu/iqvia-twitter" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/arjun-singh-b21883b1" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}

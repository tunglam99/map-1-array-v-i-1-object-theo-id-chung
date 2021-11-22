import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  mang = [];
  ngOnInit(): void {
    const a = ['123a', '123b'];
    const b = [
      { id: '123a', name: 'lâm' },
      { id: '123b', name: 'la' },
      { id: '123c', name: 'ba' },
    ];

    a.map((item) => {
      const c = b.find((x) => x.id === item);
      this.mang.push(c);
    });
    console.log(this.mang);
  }
}

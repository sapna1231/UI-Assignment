import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  public albumList: any[] = [];
  public photoUrl:string = "";
  constructor(private http: HttpClient) {}

  // Following event will be called when user select album from dropwdown.
  changeAlbum($event) {
    var selectedId = $event.target.value;
    this.http.get(`https://jsonplaceholder.typicode.com/photos/${selectedId}`).subscribe((data: any) => {
      this.photoUrl = data.thumbnailUrl;
    });
  }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe((data: any) => {
      this.albumList = data;
    });
  }
 
 
}

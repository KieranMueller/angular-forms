import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  favSong = {
    title: '',
    artist: '',
  };
  response: any;

  constructor(private http: HttpClient) {}

  submit() {
    this.http.post('https://httpbin.org/post', this.favSong).subscribe({
      next: (res: any) => {
        console.log(JSON.parse(res.data));
        this.response = JSON.parse(res.data);
        // Reset input fields upon receiving response
        this.favSong.title = '';
        this.favSong.artist = '';
      },
      error: (e) => console.log(e),
    });
  }
}

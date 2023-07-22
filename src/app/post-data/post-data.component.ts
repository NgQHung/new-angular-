import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent {
  constructor(private httpServerService: HttpServerService) {}
  public payload = {
    body: 'comment number 4',
    postId: 4,
  };
  public ngOnInit(): void {
    this.httpServerService.postComment(this.payload).subscribe((data) => {
      console.log(data);
    });
  }
}

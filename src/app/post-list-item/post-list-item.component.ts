import { Component, OnInit ,Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() id: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts = 0;
  @Input() lastUpdate = new Date();
  @Input() index : number;
  constructor(private postService: PostService) { }
  posts : any [];
  postSubscription: Subscription;
  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }
  LoveIt(){
  //console.log(this.postLoveIts);
   return(this.postLoveIts ++);
  }
  DislikeIt(){
   // console.log(this.postLoveIts);
    return(this.postLoveIts --);
  }
  onDelete() {
    this.postService.deletePost(this.index);
  }

}

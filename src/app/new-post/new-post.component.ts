import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  defaultLove = '0';
  
  constructor(private postservive: PostService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
   const title = form.value['title'];
   const content = form.value['content'];
   const loveIts = form.value['loveIts'];
   const created_at =form.value['created_at'];
   this.postservive.addPost(title,content,loveIts,created_at);
   this.router.navigate(['/posts']);
}
}

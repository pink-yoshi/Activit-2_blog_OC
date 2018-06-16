import { Subject } from "rxjs";


export class PostService {

postSubject = new Subject<any[]>();

 private posts = [
    {
      id: 1,
      title: 'Mon premier Post',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'",
      loveIts: 1,
      created_at:'date'
    },
    {
      id :2,
      title: 'mon deuxiéme Post',
      content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'",
      loveIts: -1,
      created_at:'date'
    },
    {
      id :3,
      title: 'Encore un Post ...',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'",
      loveIts: 0,
      created_at:'date'
    }
  ];

 emitPostSubject(){
   this.postSubject.next(this.posts.slice());

 } 
 getPostById(id: number){
   const post = this.posts.find(
     (postObject)=>{
       return postObject.id === id;
     }
   );

return post;
 }
addPost(title: string , content: string, loveIts:number ,created_at:string){
const postObject = {
  id:0,
  title:'',
  content:'',
  loveIts: 0,
  created_at:'date'
};
postObject.title=title;
postObject.content=content;
postObject.loveIts=loveIts;
postObject.id = this.posts[(this.posts.length - 1)].id + 1;
postObject.created_at=created_at;
this.posts.push(postObject);
this.emitPostSubject();
}
deletePost(i: number) {
  this.posts.splice(i,1);
  this.emitPostSubject();
}
}

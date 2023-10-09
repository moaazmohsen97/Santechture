import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { PostsService } from '../../services/posts.service';
import { UpdatePostComponent } from './update-post/update-post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  postId: any;
  page: number = 1;
  isLoading: boolean = false;
  skip: number = 0;
  take: number = 5;
  constructor(
    private postService: PostsService,
    public dialogService: DialogService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.allPosts(this.skip, this.take);
    this.cd.detectChanges();
  }

  allPosts(skip?: any, take?: any): void {
    this.isLoading = true;
    this.postService.getPostsList(skip, take).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.posts = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onClickPaginate(e: any) {
    this.skip = e?.first;
    this.take = e?.rows;
    this.allPosts(this.skip, this.take);
  }

  onUpdatePost(item: any) {
    let ref = this.dialogService.open(UpdatePostComponent, {
      data: item,
      header: 'Update Post',
      width: '40%',
    });
    ref.onClose.subscribe((item: any) => {
      this.posts.forEach((el) => {
        if (el.id == item.id) {
          el.title = item.title;
          el.body = item.body;
        }
      });
    });
  }
}

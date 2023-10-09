import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { PostsService } from 'src/app/pages/services/posts.service';
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private PostsService: PostsService,
    private alertsService: AlertsService
  ) {}
  updateForm = this.fb?.group({
    title: [''],
    body: [''],
  });
  get formControls(): any {
    return this.updateForm?.controls;
  }
  ngOnInit(): void {
    this.updateForm.patchValue({
      title: this.config?.data?.title,
      body: this.config?.data?.body,
    });
  }

  submit() {
    let data: any = { ...this.updateForm.value };
    data.id = this.config?.data?.id;
    this.PostsService.updatePost(data).subscribe({
      next: (res: any) => {
        this.ref.close(res);
        this.alertsService?.openSweetAlert('success', 'updated sucessfully');
      },
      error: (err: any) => {
        this.alertsService?.openSweetAlert('error', 'error in update');
      },
    });
  }

}

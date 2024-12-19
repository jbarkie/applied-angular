import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormGroupFromModel } from '@shared';
import { PostCreateModel } from '../types';
import { PostsStore } from '../services/post-store';

type FormModel = FormGroupFromModel<PostCreateModel>;

@Component({
  selector: 'app-lrc-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: ` <form [formGroup]="form" (ngSubmit)="addPost()">
    <div class="form-control">
      <label for="name" class="label">Name of Post</label>
      <input
        name="name"
        formControlName="name"
        type="text"
        class="input input-primary"
      />
      @let nameField = form.controls.name;
      @if (nameField.errors && (nameField.touched || nameField.dirty)) {
        <div class="alert alert-error">
          @if (nameField.hasError('required')) {
            <p>Input required</p>
          }
          @if (nameField.hasError('minlength')) {
            <p>Not long enough</p>
          }
        </div>
      }
    </div>
    <div class="form-control">
      <label for="description" class="label">Description</label>
      <textarea
        name="description"
        type="text"
        class="input input-primary"
        formControlName="description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="link" class="label">URL</label>
      <input
        name="link"
        formControlName="link"
        type="url"
        class="input input-primary"
      />
    </div>
    <button type="submit" class="btn btn-primary">Add Link</button>
  </form>`,
  styles: ``,
})
export class EntryComponent {
  store = inject(PostsStore);
  form = new FormGroup<FormModel>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    link: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  addPost() {
    if (this.form.valid) {
      const newPostRequest: PostCreateModel = this.form
        .value as unknown as PostCreateModel;
      this.store.addPost(newPostRequest);
    } else {
      console.log(this.form.errors);
    }
  }
}

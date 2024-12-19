import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lrc-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<form>
    <div class="form-control">
      <label for="name" class="label">Name of Post</label>
      <input name="name" type="text" class="input input-primary" />
    </div>
    <div class="form-control">
      <label for="description" class="label">Description</label>
      <textarea
        name="description"
        type="text"
        class="input input-primary"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="name" class="label">URL</label>
      <input name="name" type="url" class="input input-primary" />
    </div>
    <button type="submit" class="btn btn-primary">Add Link</button>
  </form>`,
  styles: ``,
})
export class EntryComponent {}

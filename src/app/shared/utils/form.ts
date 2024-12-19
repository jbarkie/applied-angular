import { FormControl } from '@angular/forms';

export type FormGroupFromModel<T> = {
  [Property in keyof T]: FormControl<T[Property]>;
};

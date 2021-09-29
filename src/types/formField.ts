import { FormViewDateField } from './views/form/fields/date';
import { FormViewSelectField } from './views/form/fields/select';
import { FormViewTextField } from './views/form/fields/text';
import { FormViewToggleField } from './views/form/fields/toggle';

export type FormField = FormViewDateField | FormViewSelectField | FormViewTextField | FormViewToggleField;

import { ActionCopy } from './actions/copy';
import { ActionOpenUrl } from './actions/openUrl';
import { ActionPaste } from './actions/paste';
import { ActionShowToast } from './actions/showToast';

export type Action = ActionOpenUrl | ActionPaste | ActionCopy | ActionShowToast;

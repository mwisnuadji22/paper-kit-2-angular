export interface DialogBasic {
  title: string;
  content: string;
  withCloseBtn?: boolean;
  buttons: {
    name: string;
    class: string;
    action: string | boolean;
  }[];
}

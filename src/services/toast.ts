// src/services/ToastService.ts
import { Toast } from 'primereact/toast';
import { createRef, type RefObject } from 'react';

class ToastServiceClass {
  private toastRef: RefObject<Toast | null> = createRef<Toast>();

  setRef(ref: Toast | null) {
    if (ref) {
      this.toastRef.current = ref;
    }
  }

  showSuccess(summary: string, detail: string) {
    this.toastRef.current?.show({ severity: 'success', summary, detail, life: 3000 });
  }

  showError(summary: string, detail: string) {
    this.toastRef.current?.show({ severity: 'error', summary, detail, life: 4000 });
  }

  showInfo(summary: string, detail: string) {
    this.toastRef.current?.show({ severity: 'info', summary, detail, life: 3000 });
  }

  showWarn(summary: string, detail: string) {
    this.toastRef.current?.show({ severity: 'warn', summary, detail, life: 3000 });
  }
}

export const ToastService = new ToastServiceClass();

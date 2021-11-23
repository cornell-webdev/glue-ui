import { toast } from 'react-toastify'

type IToastVariant = 'info' | 'success' | 'warning' | 'error'

export interface IToastOptions {
  id: string
  variant: IToastVariant
  msg: string
}

export const showToast = ({ id, variant, msg }: IToastOptions) => {
  toast[variant](msg, { toastId: id })
}

export default showToast

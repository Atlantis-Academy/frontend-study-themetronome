import { openModalWindow } from '../modules/userDataModal'

export const modalWindowTimer: number = window.setTimeout(
  () => openModalWindow('.modal', modalWindowTimer),
  3000
)

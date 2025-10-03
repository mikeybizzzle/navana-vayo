import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Vayo Vault',
  description: 'Members-only travel deals',
}

export default function ExpenseManagementPage() {
  redirect('/')
}

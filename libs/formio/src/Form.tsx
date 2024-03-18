import { Components, Templates, Form as FormioForm } from '@formio/react'

import { Button, Textarea } from './components'
import { template } from './template'

Components.setComponents({ button: Button, textarea: Textarea })
Templates.current = template

export function Form({ form }: any) {
  return <FormioForm form={form} />
}

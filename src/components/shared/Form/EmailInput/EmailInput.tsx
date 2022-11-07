import classNames from 'classnames'
import React from 'react'
import { EmailInputProps } from '../types'

const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
  ({ isLoading = false, isDisabled = false, classname }, ref) => {
    return (
      <input
        type="email"
        ref={ref}
        placeholder="Enter your email"
        className={classNames('input input-bordered', classname)}
        {...((isLoading || isDisabled) && { disabled: true })}
      />
    )
  },
)
EmailInput.displayName = 'EmailInput'

export default EmailInput

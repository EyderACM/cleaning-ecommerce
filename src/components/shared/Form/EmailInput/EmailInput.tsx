import classNames from 'classnames'
import React from 'react'
import { EmailInputProps } from '../types'

const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
  ({ isLoading = false, isDisabled = false, classname, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="email"
        placeholder="Enter your email"
        className={classNames('input input-bordered', classname)}
        {...((isLoading || isDisabled) && { disabled: true })}
        {...rest}
      />
    )
  },
)
EmailInput.displayName = 'EmailInput'

export default EmailInput

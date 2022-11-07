import classNames from 'classnames'
import React from 'react'
import { PasswordInputProps } from '../types'

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ isLoading = false, isDisabled = false, classname }, ref) => {
    return (
      <input
        type="password"
        ref={ref}
        placeholder="******"
        className={classNames('input input-bordered', classname)}
        {...((isLoading || isDisabled) && { disabled: true })}
      />
    )
  },
)
PasswordInput.displayName = 'PasswordInput'

export default PasswordInput

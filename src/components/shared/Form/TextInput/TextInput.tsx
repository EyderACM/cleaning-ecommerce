import classNames from 'classnames'
import React from 'react'
import { TextInputProps } from '../types'

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      isLoading = false,
      isDisabled = false,
      classname,
      placeholder = '',
      ...rest
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={classNames('input input-bordered', classname)}
        {...((isLoading || isDisabled) && { disabled: true })}
        {...rest}
      />
    )
  },
)
TextInput.displayName = 'TextInput'

export default TextInput

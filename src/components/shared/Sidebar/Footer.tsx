import { FC, ReactNode } from 'react'

export const FooterContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-10/12">{children}</div>
}

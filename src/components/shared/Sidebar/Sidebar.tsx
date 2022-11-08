import { FCWithChildren } from '../types'
import { FooterContainer } from './Footer'
import { SubTitle, Title, TitleContainer } from './Title'

const Sidebar: FCWithChildren<{}> & {
  Title: typeof Title
  SubTitle: typeof SubTitle
  TitleContainer: typeof TitleContainer
  FooterContainer: typeof FooterContainer
} = ({ children }) => {
  return (
    <div className="h-screen w-6/12 p-4 ">
      <div
        className="flex flex-col items-center h-full rounded-2xl px-16"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1606232390005-e6c6b0baf0c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

Sidebar.Title = Title
Sidebar.SubTitle = SubTitle
Sidebar.TitleContainer = TitleContainer
Sidebar.FooterContainer = FooterContainer

export default Sidebar

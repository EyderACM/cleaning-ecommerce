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
        {/* <div className="h-full flex flex-col justify-center mt-12  max-w-xl">
          <p className="text-white text-6xl font-bold">
            Join the biggest <br /> e-cleaning platform.
          </p>
          <p className="text-white pt-8 text-2xl ">
            Discover the very best cleaning products for your bussiness or
            household. All accross the country.
          </p>
        </div>
        <div className="w-10/12">
          <h3 className="text-white pb-2 pl-2 font-semibold text-lg">
            Products everyone&apos;s talking about:
          </h3>
          <div className="card card-side w-full bg-base-100 h-32 shadow-xl py-2 px-2 mb-16">
            <div
              className="h-full w-4/12 rounded-2xl"
              style={{
                backgroundImage: `url('imgs/cleaningSpray.png')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className="card-body flex flex-row text-center p-4 w-9/12">
              <div className="flex flex-col align-top text-left">
                <h2 className="card-title">Cleaning spray</h2>
                <p className="text-sm">
                  Amazing product for cleaning any leftovers after your
                  breakfast, dinner or lunch!
                </p>
              </div>
              <div className="card-actions items-center ">
                <button className="btn btn-primary">Buy</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

Sidebar.Title = Title
Sidebar.SubTitle = SubTitle
Sidebar.TitleContainer = TitleContainer
Sidebar.FooterContainer = FooterContainer

export default Sidebar

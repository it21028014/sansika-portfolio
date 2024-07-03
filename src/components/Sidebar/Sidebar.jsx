import './Sidebar.scss'
import Togglebutton from './Togglebutton/Togglebutton'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='bg'>
            <Links />
        </div>
      <Togglebutton />
    </div>
  )
}

export default Sidebar

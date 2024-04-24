import { ReactComponent as FristLogo } from './download.svg';
import { ReactComponent as LastLogo } from './download1.svg';
import Details from '../details/details';
import Portifolio from '../Portifolio/Portifolio';
import './home.css'

const Home=()=>{

return (
    <div className='home-page'>
     <div className='frist-part'>
     <div className='welcome-header'>
     <h2 className='title'>Frontend Developer</h2>
     <h2 className='sub-title'>Javascript Developer with React</h2>     
     </div>
     <div className='home-page-image'>
      <FristLogo/>
      <LastLogo/>
     </div>
     <div className='welcome-footer'>
     <h1 className='home-h1'>Hi, I'm Abdelrhman Nabil , Nice to meet you</h1>
     </div>
     </div>
     <div className='second-part'>
     <Details/>
     </div>
     <div className='thaired-part'>
     <Portifolio/>
     </div>

     </div>
)
}
export default Home
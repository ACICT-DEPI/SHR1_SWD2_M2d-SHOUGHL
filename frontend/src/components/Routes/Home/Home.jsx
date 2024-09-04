import Brief from './Brief'
import './Home.css'
import ToDo from './ToDo'
import WhyUs from './WhyUs'

const Home = () => {
  return (
    <div>
      <Brief />
      <WhyUs />
      <ToDo />
    </div>
  )
}

export default Home
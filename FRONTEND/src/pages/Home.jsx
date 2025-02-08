import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Departments from '../components/Departments';
//import MessageForm from '../components/MessageForm';

const Home = () => {
  
  return (
    <>
    <Hero title={"Welcome to Smart Health Consulting System"} imageUrl={"/hero.png"}/>
    <Biography imageUrl={"/about.png"}/>
    <Departments/>
    </>
  )
}

export default Home
import Header from './components/Header'
import Links from './components/Links'
import Otherlinks from './components/Otherlinks'


import { profile_data, links_data, other_links_data } from './components/Data'

function App() {
  return (
    <>
      <Header props={profile_data}/>
      <Otherlinks props={other_links_data}/>
      <Links props={links_data}/>
    </>
  )
}

export default App;
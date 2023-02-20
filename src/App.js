import MountainsImages from "./components/SapShot/mountains";
import BeachImages from "./components/SapShot/beach"
import BirdsImages from "./components/SapShot/birds";
import FoodImages from "./components/SapShot/food";
import SearchImages from "./components/SapShot/searchImages";
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App=()=>{
    return(
        <div id="main">
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<SearchImages/>}/>
            <Route path="mountains" element={<MountainsImages/>}/>
            <Route path="beaches" element={<BeachImages/>}/>
            <Route path="birds" element={<BirdsImages/>}/>
            <Route path="food" element={<FoodImages/>} />
            
         </Routes>
         </BrowserRouter>
          
        </div>
    )

}
        
    



export default App;
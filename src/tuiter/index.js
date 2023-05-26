import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";


function Tuiter() {
 return (
   <div>
     <Nav />
     <div className="row">
       <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
         <NavigationSidebar />
       </div>
       <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-7 col-xxl-7">
         <Routes>
           <Route path="/home" element={<HomeScreen />} />
           <Route path="/explore" element={<ExploreScreen />} />
           <Route path="/bookmarks" element={<BookmarksScreen />} />
           <Route path="/profile" element={<ProfileScreen />} />
         </Routes>
       </div>
       <div className="col-0 col-sm-0 col-md-0 col-lg-4 col-xl-3 col-xxl-3">
         <WhoToFollowList />
       </div>
     </div>
   </div>
 );
}
export default Tuiter;
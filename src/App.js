import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
 <BrowserRouter>
 <Box>
  <Navbar/>
  <Routes>
    <Route path="/" component={<Feed/>}/>
    <Route path="/video/:id" component={<VideoDetail/>}/>
    <Route path="/channel/:id" component={<ChannelDetail/>}/>
    <Route path="/search/:searchTerm" component={<SearchFeed/>}/>

  </Routes>
 </Box>
 </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./utils/reduxStore";
import Feed from "./components/Feed";
import { Toaster } from "react-hot-toast";
import AllConnection from "./components/AllConnection";
import ConnectionRequest from "./components/ConnectionRequest";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<AllConnection />} />
              <Route path="/requests" element={<ConnectionRequest />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

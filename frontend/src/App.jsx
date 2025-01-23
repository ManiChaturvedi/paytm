import Dashboard from "./pages/dashboard";
import SendMoney from "./pages/senmoney";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

  function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/send" element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
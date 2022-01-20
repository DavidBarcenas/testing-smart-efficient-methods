import { Route, Routes } from "react-router-dom";
import Confirm from "./components/confirm";
import Error from "./components/error";
import Main from "./components/main";
import Page2 from "./components/page-2";
import Page1 from "./components/page1";
import Success from "./components/success";
import { MultiPageProvider } from "./store/provider";

export default function IntegrationApp() {
  return (
    <div>
      <MultiPageProvider initialValues={{ food: '', drink: '' }}>
        <Routes>
          <Route path="/page-1" element={<Page1 />} />
          <Route path="/page-2" element={<Page2 />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/success" element={<Success />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </MultiPageProvider>
    </div>
  )
}
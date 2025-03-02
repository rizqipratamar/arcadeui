import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonPage from "./docs/ButtonPage";
import BadgePage from "./docs/BadgePage";
import CardPage from "./docs/CardPage";
import InputPage from "./docs/InputPage";
import SelectPage from "./docs/SelectPage";
import ModalPage from "./docs/ModalPage";
import AlertPage from "./docs/AlertPage";
import WelcomePage from "./docs/WelcomePage";
import Layout from "./components/Layout/Layout";
import AccordionPage from "./docs/AccordionPage";
import ChartPage from "./docs/ChartPage";
import TablePage from "./docs/TablePage";
import AvatarPage from "./docs/AvatarPage";
import BreadcrumbsPage from "./docs/BreadcrumbsPage";
import CalendarPage from "./docs/CalendarPage";
import CarouselPage from "./docs/CarouselPage";
import ChatBubblePage from "./docs/ChatBubblePage";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/badge" element={<BadgePage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/alert" element={<AlertPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/breadcrumbs" element={<BreadcrumbsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/chat-bubble" element={<ChatBubblePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

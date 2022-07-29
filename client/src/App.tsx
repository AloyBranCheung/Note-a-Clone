import "./styles/global.css";
import Layout from "./components/layout";
import MainPage from "./components/molecules/MainPage/MainPage";

function App() {
  return (
    <div>
      <Layout>
        <MainPage />
      </Layout>
    </div>
  );
}

export default App;

import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import ProfilePage from "./components/ProfilePage"
import UserContext from "./components/UserContext"
import UserProfile from "./components/UserProfile"
import WelcomeMessage from "./components/WelcomeMessage"

function App() {
  const userData = {name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

      <Counter/>
      <ProfilePage userData={userData}/>

      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </>
  )
}

export default App

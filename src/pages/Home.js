import Header from "../components/header/Header"

const Home = () => {
  return (
    <>
      <Header />
      <main class="section">
      <div class="container">
        <ul class="content-list">
          <li class="content-list__item">
            <h2 class="title-2">Frontend</h2>
            <p>
              JavaScript, ReactJS, Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI, StyledComponents
            </p>
          </li>
        </ul>
      </div>
    </main>
    </>
  )
}

export default Home

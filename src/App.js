import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPost } from "./redux/POST/post.action";
import Header from "./layout/header";
import Container from "./layout/container";
import Footer from "./layout/footer";

function App(props) {
  // const { statePosts, getPost } = props;
  // let [value, setValue] = useState(0);
  useEffect(() => {
    getPost();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Container />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}


const mapStateToProps = (state) => {
  console.log('state:', state);
  return {
    statePosts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: () => dispatch(getPost()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
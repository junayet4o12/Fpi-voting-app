import Election from "../assets/components/Election";
import Header from "../assets/components/Header";
import Mission from "../assets/components/Mission";
import Footer from "../shareCompo/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Mission></Mission>
            <Election></Election>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;
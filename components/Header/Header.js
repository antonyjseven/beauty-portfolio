import Nav from "../nav";
// import styles from './style.scss'

const Header = () => (
  <section>
    <h2>Anastasia Leonova</h2>
    <Nav />

    <style jsx>{`
      h2 {
        display:flex;
        justify-content:center;
        font-size:28px;
        font-family: "Aquatico-Regular";
      }
      @media (max-width: 600px) {
        section {
          background: blue;
        }
      }
    `}</style>
  </section>
);
export default Header;

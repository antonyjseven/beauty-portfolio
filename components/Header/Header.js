import Nav from "../nav";

const Header = () => (
  <section>
    <h2>Anastasia Leonova</h2>

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

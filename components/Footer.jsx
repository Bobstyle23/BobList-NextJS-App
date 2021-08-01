const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <h1>Copyright Bobstyle_023 {currentYear}</h1>
    </footer>
  );
};

export default Footer;

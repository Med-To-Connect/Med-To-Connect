const Navbar = () => {
  const islogged = true;
  return (
    <div id="navbar">
      <label>MED TO CONNECT</label>
      <div className="links">
        <a href="">link1</a>
        <a href="">link2</a>
        <a href="">link3</a>
        {islogged ? <a href="">Login/Register</a> : <a href="">Logout</a>}
      </div>
    </div>
  );
};

export default Navbar;

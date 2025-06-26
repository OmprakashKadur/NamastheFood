const Header = () => {
  return (
    <div className="flex justify-between p-4 shadow-md">
      {/* <div><img src="/Images/foodFireLogo.png" alt="logo" className="h-10" /></div> */}
      <div><img src="https://foodfire.netlify.app/Food%20Fire%20Logo.feaf9db9.png" alt="Namasthe Food" className="h-10" /></div>
      <div className="flex gap-4">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Cart</div>
      </div>
    </div>
  );
};

export default Header
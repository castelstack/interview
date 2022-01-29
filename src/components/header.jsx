import logo from "../assets/logo.png";
function Header() {
  return (
    <div className='flex gap-4 justify-between items-center py-6 px-4 border-b-2 border-gray-40'>
      <div className='flex gap-4 items-center'>
      <div className='w-12 h-12  border-gray-400'>
        <img src={logo} alt='logo' className='w-12 h-12' />
      </div>
        <h4 className='text-black font-normal text-sm'>New Release</h4>
        <h4 className='text-black font-normal text-sm'>Customize</h4>
        <h4 className='text-black font-normal text-sm'>Sale</h4>
      </div>
          <div className='flex gap-4 items-center'>
              <div className='flex gap-6 items-center'>

        <button className='text-sm text-gray-400'>
          <i class='fa fa-bell' aria-hidden='true'></i>
        </button>
        <button className='text-sm text-red-400'>
          <i class='fa fa-heart' aria-hidden='true'></i>
        </button>
        <button className='text-sm text-gray-400'>
          <i class='fa fa-shopping-cart' aria-hidden='true'></i>
        </button>
              </div>
              <button className='text-base text-gray-400 flex items-center'>
              <img src={logo} alt='logo' className='w-4 h-4 mx-2' />
              <p className='text-black text-xs '>Owner name</p>
        </button>
          </div>
          
    </div>
  );
}

export default Header;

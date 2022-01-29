import logo from "../assets/logo.png";
function Header() {
    return (
     
       <div className='flex gap-4 items-center  px-4 border-b-2 border-gray-40'>
            <div className='w-12 h-12  border-gray-400'>
                <img src={logo} alt='logo' className='w-12 h-12'/>
            </div>
            <div className='flex gap-4 items-center py-8'>
                <h4 className='text-black font-normal text-sm'>New Release</h4>
                <h4 className='text-black font-normal text-sm'>Customize</h4>
                <h4 className='text-black font-normal text-sm'>Sale</h4>
            </div> 
       </div>
    );
  }
  
  export default Header;
  
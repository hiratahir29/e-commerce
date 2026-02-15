import { useCallback, useEffect, useMemo, useState, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";
import { loadAllProducts, setProductLoading, setSearchQuery } from "../store/productsSlice";
import { logout } from "../store/userSlice";

const Header = () => {

  const items = useSelector((state: any) => state.cart.items);
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn)
  const total = useMemo(()=>{
    return items.reduce((acc: any, cur: any) => {
        acc += cur.quantity;
        return acc
  }, 0)
  },[items]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

   const [inputValue, setInputValue] = useState('');
  const fetchSearchResults = useCallback((query: string) => {
    dispatch(setSearchQuery(query));
    dispatch(setProductLoading(false));
  }, []); 

  const debouncedFetch = useCallback(
    debounce((query: string) => {
      fetchSearchResults(query);
    }, 500), 
    [fetchSearchResults] 
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductLoading(true));
    setInputValue(event.target.value);
    debouncedFetch(event.target.value);
  };

 
    
    const handleLogout = () => {
      dispatch(logout());
      dispatch(loadAllProducts([]));
      navigate("/"); // optional redirect
    };
      

 
  useEffect(() => {
    return () => {
      debouncedFetch.cancel();
    };
  }, [debouncedFetch]);

  return (
    <header className="sticky top-0 z-50 bg-gray-200 border-b border-gray-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              AlphaStore
            </span>
          </div>

            <div className="flex items-center gap-2 border border-gray-400 sm:w-1/2 md:w-1/4">
                <input type="text" placeholder="Search" value={inputValue} onChange={handleChange} className="w-full text-sm font-medium p-2 text-gray-700 hover:text-black"/>
            </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
            <Link to="/" className="hover:text-black transition">
              Products
            </Link>
            <Link to="#" className="hover:text-black transition">
              Categories
            </Link>
            <Link to="#" className="hover:text-black transition">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Logout
            </button>
          )}

            <Link to={'/cart'} className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition">
              Cart {items.length?total :""}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

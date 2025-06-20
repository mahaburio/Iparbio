
import { useEffect, useRef } from 'react';

const SignInDropdown = () => {
  const signinBtnRef = useRef(null);
  const accountDetailsRef = useRef(null);

  useEffect(() => {
    const handleButtonClick = (event) => {
      event.stopPropagation();
      accountDetailsRef.current.classList.toggle('block');
    };

    const handleDocumentClick = (event) => {
      if (
        accountDetailsRef.current &&
        !accountDetailsRef.current.contains(event.target) &&
        !signinBtnRef.current.contains(event.target)
      ) {
        accountDetailsRef.current.classList.remove('block');
      }
    };

    const btn = signinBtnRef.current;
    document.addEventListener('click', handleDocumentClick);
    btn.addEventListener('click', handleButtonClick);

    return () => {
      btn.removeEventListener('click', handleButtonClick);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div>
      <button id="signinBtn" ref={signinBtnRef}>
        Sign In
      </button>
      <div
        id="myAccountDetails"
        ref={accountDetailsRef}
        className="hidden absolute top-full mt-2 bg-white border p-4"
      >
        My Account Details
      </div>
    </div>
  );
};

export default SignInDropdown;

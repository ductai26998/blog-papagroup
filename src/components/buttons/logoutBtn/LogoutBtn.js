import React from "react";
import { useCookies } from 'react-cookie';

import './LogoutBtn.scss';

export default function LogoutBtn() {
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);

    let logout = () => {
        removeCookie('accessToken');
        window.location.href = "/";
    } 

    return (
      <div className="btn-container">
          <div className="logout-btn" onClick={logout}>Logout</div>
      </div>
    );
}

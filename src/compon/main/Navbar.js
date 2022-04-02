import React from "react";
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar bg-dark navbar-light navbar-expand-lg row-reverse">
        <div class="container flex-row-reverse">
          <Link className="navbar-brand" to="/gooo">Farahy</Link>
          {/* <a class="navbar-brand" href="/">Farahy</a> */}
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
              <i class="fa-solid fa-caret-down"></i>
            </span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav flex-lg-row-reverse me-lg-auto">
              <li class="nav-item active d-flex align-items-center  p-lg-0 mb-3 ps-3 mb-2  mb-lg-0 mx-auto">
                <a class="nav-link text-light" href="#">
                  الرئيسية
                  <i class="fa-solid fa-house ms-1"></i>
                </a>
              </li>
              <li class="nav-item text-center d-flex align-items-center  p-lg-0 mb-3 ps-3 mb-lg-0  mx-auto">
                <a class="nav-link text-light" href="#">الفوتوجرافرز
                  <i class="fa-solid fa-camera ms-1"></i>
                </a>
              </li>
              <li class="nav-item d-flex align-items-center  p-lg-0 ps-3 mb-lg-0 mb-3 mx-auto">
                <a class="nav-link text-light" href="#">الميكب أرتست

                  <i class="fa-solid fa-palette ms-1"></i>
                </a>
              </li>
              <li class="nav-item d-flex align-items-center  p-lg-0 ps-3 mb-lg-0 mb-3 mx-auto">
                <a class="nav-link text-light" href="#">سيارات الزفاف
                  <i class="fa-solid fa-car-rear ms-1"></i>
                </a>
              </li>
              <li class="nav-item d-flex align-items-center  p-lg-0 ps-3 mb-lg-0 mb-3 mx-auto">
                <a class="nav-link text-light" href="#">قاعات الأفراح
                  <i class="fa-solid fa-place-of-worship ms-1"></i>
                </a>
              </li>
              <li class="nav-item dropdown align-items-center  p-lg-0 p-l3-0 ps-lg-1 mb-lg-0 mx-lg-auto text-center">
                <a class="nav-link text-light dropdown-toggle mb-1" href="#" id="hello" role="button" data-toggle="dropdown">
                  حسابى
                  <i class="fa-solid fa-user"></i>
                </a>
                <div class="dropdown-menu w-100" aria-labelledby="hello">
                  <a class="dropdown-item p-1 text-center" href="hello.html">محفظتى
                    <i class="fa-solid fa-wallet ms-1"></i>
                  </a>
                  <a class="dropdown-item p-1 text-center" href="#">الحجوزات
                    <i class="fa-solid fa-bookmark ms-1"></i>
                  </a>
                  <div class="dropdown-divider" ></div>
                  <a class="dropdown-item p-1 text-center" href="#">
                    تسجيل الخروج
                    <i class="fa-solid fa-right-from-bracket ms-1"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

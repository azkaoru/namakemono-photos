import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Header = () => {
  const router = useRouter();

  const handleLocaleChange = (event) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  // Will default to `common` if not argument is specified
  const { t } = useTranslation();

  return (
    <header>
        <nav className="navbar navbar-expand navbar-dark bg-primary navbar-fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">NAMAKEMO Photos</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={router.asPath === "/" ? "nav-link active" : ""} aria-current="page" href="#">{t("home")}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">{t("about")}</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>

                </li>
              </ul>

            </div>
          </div>
        </nav>

      <select onChange={handleLocaleChange} value={router.locale}>
        <option value="en">🇺🇸 English</option>
        <option value="zh-CN">🇨🇳 中文</option>
        <option value="ja">🇸🇪 日本語</option>
      </select>

      <style jsx>{`
        a {
          margin-right: 0.5rem;
        }

        a.active {
          color: blue;
        }

        nav {
          margin-bottom: 0.5rem;
        }
      `}</style>
      </header>


  );
};

export default Header;

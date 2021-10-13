import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import { useRouter } from "next/router";
import { logOutUser } from "../redux/actions/user.action";

const UnAuthenticated = [
  {
    text: "Buy",
    url: "#",
  },
  {
    text: "Sell",
    url: "#",
  },
  {
    text: "How it works",
    url: "#",
  },
  {
    text: "Login",
    url: "/signin",
  },
];

const Authenticated = [
  {
    text: "Buy",
    url: "#",
  },
  {
    text: "Sell",
    url: "fundwallet",
  },
  {
    text: "Dashboard",
    url: "#",
  },
  {
    text: "Wallet",
    url: "#",
  },
  {
    text: "Dispute",
    url: "#",
  },
];

const UnAuthorizedHeader = () => {
  return (
    <>
      {UnAuthenticated.map((item, index) => {
        return (
          <li className="nav-item px-4" key={index + item.text}>
            <Link href={item.url}>
              <span className="font-weight-bold">{item.text}</span>
            </Link>
          </li>
        );
      })}
      <li className="nav-item dropdown px-4">
        <button
          className="btn btn-success btn-md text-light dropdown-toggle font-weight-bold register py-2"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Register
        </button>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <span className="font-weight-bold dropdown-item">
            <Link href="/signup?seller">as a seller</Link>
          </span>
          <span className="font-weight-bold dropdown-item">
            <Link href="/signup?buyer">as a buyer</Link>
          </span>
        </div>
      </li>
    </>
  );
};

const AuthorizedHeader = ({ user }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      {Authenticated.map((item, index) => {
        return (
          <li className="nav-item px-4" key={index + item.text}>
            <Link href={item.url}>
              <span className="font-weight-bold">{item.text}</span>
            </Link>
          </li>
        );
      })}
      <li className="nav-item dropdown px-4">
        <span
          className="dropdown-toggle font-weight-bold py-2 text-capitalize"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {user}
        </span>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <span
            className="font-weight-bold dropdown-item"
            onClick={() => {
              dispatch(logOutUser());
              router.push("/signin");
            }}
          >
            Sign out
          </span>
          <span className="font-weight-bold dropdown-item">
            <Link href="">##</Link>
          </span>
        </div>
      </li>
    </>
  );
};

function Header() {
  const user = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 px-5 header">
      <img src="/header-logo.png" alt="Logo" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto align-items-center">
          {user.isAuth ? (
            <AuthorizedHeader user={user?.user.name} />
          ) : (
            <UnAuthorizedHeader />
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;

import React, { useState } from "react";
import axios from "axios";
import "./Herder.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const trimmedSearchTerm = searchTerm.toLowerCase().trim();

    if (trimmedSearchTerm === "") {
      alert("Vui lòng nhập từ khóa tìm kiếm.");
      return;
    }

    try {
      const response = await axios.get(
        `https://86yfl7-8080.csb.app/books?q=${trimmedSearchTerm}`
      );
      const searchResults = response.data;
      onSearch(searchResults);
    } catch (error) {
      console.error("Đã xảy ra lỗi khi tìm kiếm sách:", error);
    }
  };

  return (
    <header id="main-header" className="style__HeaderRevamp-sc-q53692-1 eDISBe">
      <div className="ContainerRevamp-sc-1hvvgwz-0 dOGdaN">
        <div className="HomeRevampHeader__HeaderLayout-sc-1n94l81-1 bflSia">
          <div className="style__Logo-sc-3sdkaq-0 cWrfyT">
            <a href="/" data-view-id="header_main_logo" className="tiki-logo">
              <img
                src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                alt="tiki-logo"
                width="96"
                height="40"
              />
              <span>Tốt & Nhanh</span>
            </a>
          </div>
          <div className="HomeRevampHeader__SearchContainerStyled-sc-1n94l81-0 huqeuo">
            <div className="Middle__Wrap-sc-vop1h1-0 edlkEo">
              <div className="Middle__LeftContainer-sc-vop1h1-1 hBRVdJ">
                <div className="styles__Root-sc-6cbqeh-0 hULqIV">
                  <div className="styles__FormRevamp-sc-6cbqeh-1 cTCXTh">
                    <img
                      className="icon-search"
                      src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                      alt="icon-search"
                    />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleInputChange}
                      placeholder="Sale To Chốt Năm"
                      className="styles__InputRevamp-sc-6cbqeh-2 IXqBC"
                    />
                    <button onClick={handleSearch} className="styles__ButtonRevamp-sc-6cbqeh-3 LdVUr">
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </div>
              <div data-view-id="header_user_shortcut" class="Userstyle__RootRevamp-sc-6e6am-15 hkQlMw">
                <div class="Userstyle__MenuItemRevamp-sc-6e6am-19 fUChpf">
                  <img src="https://salt.tikicdn.com/ts/upload/b4/90/74/6baaecfa664314469ab50758e5ee46ca.png" alt="header_menu_item_home" />
                  <a rel="nofollow">Trang chủ</a>
                </div>
                <div data-view-id="header_header_account_container" class="Userstyle__MenuItemRevamp-sc-6e6am-19 fUChpf">
                  <img src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png" alt="header_header_account_img" />
                  <span>Tài khoản</span>
                </div>
                <div class="Userstyle__CartItem-sc-6e6am-14 hfiWvr">
                  <a data-view-id="header_user_shortcut_cart" href="#" rel="nofollow">
                    <div class="Userstyle__MenuItemRevamp-sc-6e6am-19 Userstyle__CartItemInnerRevamp-sc-6e6am-20 bhXqXQ iZYkSb">
                      <div class="cart-wrapper">
                        <img class="cart-icon" src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="header_header_img_Cart" />
                        <span class="Userstyle__ItemCartQtyRevamp-sc-6e6am-16 jbrHBQ">1</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

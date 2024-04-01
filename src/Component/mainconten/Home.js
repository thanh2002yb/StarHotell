import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Hearder/Header";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import "../Product/Product.css";
import axios from "axios";

const Home = ({ searchResults }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleCheckboxChange = async (sellerName) => {
    try {
      const response = await axios.get("https://86yfl7-8080.csb.app/books");
      const filteredBooks = response.data.filter((item) => {
        return item.current_seller.name === sellerName;
      });
      setFilteredBooks(filteredBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="product-grid">
      {searchResults && searchResults.length > 0 ? (
        <div className="search-results">
          {searchResults.map((item, index) => (
            <div key={index} className="product-item">
              <div className="hotel_img">
                <Link to={`/chi-tiet`}>
                  <img src={item.images[0].medium_url} alt={item.name} />
                </Link>
              </div>
              <Link to={`/chi-tiet/${item.id}`}>
                <h4 className="sec_h4">{item.name}</h4>
              </Link>
              <div style={{ display: "flex" }}>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
                <p className="da-ban">
                  | {item?.quantity_sold?.text || "Đã bán 1000+"}
                </p>
              </div>
              <div className="price-discount">
                <h4>
                  {item.list_price}
                  <sup style={{ top: "-0.5em" }}> ₫ </sup>
                </h4>
                <h5 className="giam-gia">
                  {Math.round(
                    ((item.original_price - item.current_seller.price) /
                      item.original_price) *
                      100
                  )}
                  %
                </h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="ContainerRevamp-sc-1hvvgwz-0 dOGdaN">
          <div className="styles__StyledInner-sc-1905sp2-0 bsxLcZ">
            <div className="styles__StyledSideBar-sc-s7dkhn-0 jZosWU">
              <div className="styles__StyledListItem-sc-w7gnxl-0 cjqkgR">
                <div className="styles__StyledTitle-sc-w7gnxl-1 efUuhP">
                  Danh mục sản phẩm
                </div>
                <p className="danh-muc">
                  <a href="" className="styles__StyledContent-sc-oho8ay-2 bOhmik">
                    Sách tiếng Việt
                  </a>
                  <a href="" className="styles__StyledContent-sc-oho8ay-2 bOhmik">
                    Văn phòng phẩm
                  </a>
                  <a href="" className="styles__StyledContent-sc-oho8ay-2 bOhmik">
                    Quà lưu niệm
                  </a>
                  <a href="" className="styles__StyledContent-sc-oho8ay-2 bOhmik">
                    English Books
                  </a>
                </p>
                <div
                  className="styles__StyledTitle-sc-w7gnxl-1 efUuhP"
                  style={{ marginTop: "20px" }}
                >
                  Nhà cung cấp
                </div>
                <label
                  class="style__CheckboxFake-sc-1ewjwu4-4"
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    name="nhassachFahasa"
                    onChange={() => handleCheckboxChange("Nhà sách Fahasa")}
                  />
                  <div>
                    <span style={{ marginLeft: "10px" }}>Nhà sách Fahasa</span>
                  </div>
                </label>
                <label
                  class="style__CheckboxFake-sc-1ewjwu4-4"
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    name="EcoTrading"
                    onChange={() => handleCheckboxChange("Eco Trading")}
                  />
                  <div>
                    <span style={{ marginLeft: "10px" }}>Eco Trading</span>
                  </div>
                </label>
                <label
                  class="style__CheckboxFake-sc-1ewjwu4-4"
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    name="Sbooks"
                    onChange={() => handleCheckboxChange("Sbooks")}
                  />
                  <div>
                    <span style={{ marginLeft: "10px" }}>Sbooks</span>
                  </div>
                </label>
                <label
                  class="style__CheckboxFake-sc-1ewjwu4-4"
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    name="TikiTrading"
                    onChange={() => handleCheckboxChange("Tiki Trading")}
                  />
                  <div>
                    <span style={{ marginLeft: "10px" }}>Tiki Trading</span>
                  </div>
                </label>
                <label
                  class="style__CheckboxFake-sc-1ewjwu4-4"
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    name="BambooBooks"
                    onChange={() => handleCheckboxChange("Bamboo Books")}
                  />
                  <div>
                    <span style={{ marginLeft: "10px" }}>Bamboo Books</span>
                  </div>
                </label>
                <label
                  class="style__CheckboxFake-sc-1ewjwu4-4"
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  <input type="checkbox" />
                  <div>
                    <span style={{ marginLeft: "10px" }}>BÌNH BÁN BOOK</span>
                  </div>
                </label>
                <label
                  class="style__CheckboxFake-sc-1ewjwu4-4"
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                >
                  <input type="checkbox" />
                  <div>
                    <span style={{ marginLeft: "10px" }}>Đông A Books Official</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="styles__ContainerWidgets-sc-1905sp2-1 mxUBJ">
              <div className="style__BannersCarouselStyled-sc-1vd4gu-0 dDEtQq"></div>
              <div className="styles__StyledHorizontalScrollingProducts-sc-1fk549z-0 kqLcfy">
                {filteredBooks && filteredBooks.length > 0 ? (
                  filteredBooks.map((item, index) => (
                    <div key={index} className="product-grid">
                      <div className="product-item">
                        <div className="hotel_img">
                          <Link to={`/chi-tiet`}>
                            <img src={item.images[0].medium_url} alt={item.name} />
                          </Link>
                        </div>
                        <Link to={`/chi-tiet/${item.id}`}>
                          <h4 className="sec_h4">{item.name}</h4>
                        </Link>
                        <div style={{ display: "flex" }}>
                          <div className="star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                          </div>
                          <p className="da-ban">
                            | {item?.quantity_sold?.text || "Đã bán 1000+"}
                          </p>
                        </div>
                        <div className="price-discount">
                          <h4>
                            {item.list_price}
                            <sup style={{ top: "-0.5em" }}> ₫ </sup>
                          </h4>
                          <h5 className="giam-gia">
                            {Math.round(
                              ((item.original_price - item.current_seller.price) /
                                item.original_price) *
                                100
                            )}
                            %
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <Product />
                )}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

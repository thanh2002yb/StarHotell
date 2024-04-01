import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Product.css";

class Product extends React.Component {
    state = {
        listbook: []
    };

    async componentDidMount() {
        try {
            const res = await axios.get('https://86yfl7-8080.csb.app/books');
            this.setState({
                listbook: res.data || []
            });
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    render() {
        const { listbook } = this.state;
        return (
            <div className="product-grid">
            {listbook && listbook.length > 0 &&
              listbook.map((item, index) => (
                <div key={index} className="product-item">
                  <div className="hotel_img">
                    <Link to={`/chi-tiet`}>
                      <img src={item.images[0].medium_url} alt={item.name} />
                    </Link>
                  </div>
                  <Link to={`/chi-tiet/${item.id}`}>
                    <h4 className="sec_h4">{item.name}</h4>
                  </Link>
                  <div style={{display:"flex"}}>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p className="da-ban">| {item?.quantity_sold?.text || "Đã bán 1000+"}</p>
                  </div>
                  <div className="price-discount">
                    <h4>{item.list_price}<sup style={{top:"-0.5em"}}> ₫ </sup></h4>
                    <h5 className="giam-gia">{Math.round(((item.original_price - item.current_seller.price)/item.original_price)*100)}%</h5>
                  </div>
                </div>
              ))
            }
          </div>
          
        );
    }
}

export default Product;

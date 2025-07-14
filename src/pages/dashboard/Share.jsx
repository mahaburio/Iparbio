import React, { useState, useMemo } from 'react';
import ShareListSection from '../../components/dashboard/ShareDetails';
import CartItem from '../../components/product-page/CartItem';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import HeaderIntialize from '../../components/header/Header';
import Footer from '../../components/footer/footer';

const Share = () => {
  const [cartItems] = useState([
    { id: 1, name: 'Welcome Kit', price: '$80', quantity: 2, image: '../images/product-img-2.webp', itemCode: '105', showControls: false },
    { id: 2, name: 'Lipstick', price: '$200', quantity: 1, image: '../images/product-img-1.webp', itemCode: '103/500ml', showControls: false },
    { id: 3, name: 'Welcome Kit', price: '$10', quantity: 2, image: '../images/product-img-2.webp', itemCode: '105', showControls: false },
    { id: 4, name: 'Lipstick', price: '$210', quantity: 1, image: '../images/product-img-3.webp', itemCode: '103/500ml', showControls: false },
    { id: 5, name: 'Welcome Kit', price: '$80', quantity: 2, image: '../images/product-img-2.webp', itemCode: '105', showControls: false },
    { id: 6, name: 'Lipstick', price: '$200', quantity: 1, image: '../images/product-img-1.webp', itemCode: '103/500ml', showControls: false },
    { id: 7, name: 'Welcome Kit', price: '$80', quantity: 2, image: '../images/product-img-2.webp', itemCode: '105', showControls: false },
    { id: 8, name: 'Lipstick', price: '$200', quantity: 1, image: '../images/product-img-1.webp', itemCode: '103/500ml', showControls: false }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [addedItems, setAddedItems] = useState([]);
  const [removingIds, setRemovingIds] = useState([]);

  const filteredItems = useMemo(() => {
    return cartItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, cartItems]);

  const handleAddToList = (item) => {
    if (!addedItems.some(i => i.id === item.id)) {
      setAddedItems([...addedItems, { ...item, showControls: true }]);
    }
  };

  const handleRemoveItem = (id) => {
    setRemovingIds(prev => [...prev, id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(item => item.id !== id));
      setRemovingIds(prev => prev.filter(itemId => itemId !== id));
    }, 300);
  };

  const updateQuantity = (id, newQty) => {
    setAddedItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: newQty } : item)
    );
  };

  const subtotal = useMemo(() => {
    return addedItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + price * item.quantity;
    }, 0);
  }, [addedItems]);

  return (
    <div className="share_link">

      {/* Header */}
      <HeaderIntialize Sponsor={true} pvBars={false} showDashboardMenu ={false} />
      {/* Share Details */}
      <section className="share-details mt-5">
        <div className="container">
          <div className="main-head-title">Share Link</div>

          <div className="row mt-4">
            <div className="col-lg-9 col-n-1">
              <p className="desc-title">
                Before you hit share, make sure your list has a name—something fun and catchy. Click “Edit Name” to get started!
              </p>
              <div className="green-desc">
                Don't forget, because you're a Preferred Customer, you'll get 10% back in referral credits on every order placed through your link!
              </div>
              <h1 className="mt-4 mb-3">Time to Share</h1>
              <p className="desc-title">
                <span className="checkmark">✓</span> Once you've got a great name, hit “Facebook Share” or “Share Link” to spread the word.
              </p>
              <ShareListSection />
            </div>

            <div className="col-lg-3 mt-lg-0 mt-md-4 mt-sm-4 mt-4 col-n-2">
              <div className="tip-cards">
                <div className="tip-card-itm">
                  <h3>Quick Tips</h3>
                  <li>✓ Make it interesting so people want to click and check it out.</li>
                  <li>✓ Keep it clear so they know what to expect.</li>
                  <li>✓ Add a personal touch to make it feel special.</li>
                </div>

                <div className="tip-card-itm mt-3">
                  <h3>Pro Tip</h3>
                  <li>✓ Add a quick personal note! Let your friends know this list was made just for them—and they’re gonna love it!</li>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mt-4 col-n-3 share-partition">
              <div className="head-title mb-3 d-flex justify-content-between align-items-center">
                <span>3. Add the product to your Share List</span>
                <div className="icon-sec d-flex align-items-center gap-3">
                  <a href="#" className="share">
                    <div className="icon"><i className="ri-share-forward-fill"></i></div>
                    <span>Share Link</span>
                  </a>
                  <a href="#" className="icon"><i className="ri-facebook-fill"></i></a>
                  <a href="#" className="icon"><i className="ri-instagram-line"></i></a>
                  <a href="#" className="icon"><i className="ri-twitter-x-line"></i></a>
                </div>
              </div>

              <div className="all-cart-items">
                <div className="allcartAddedHere py-1 mt-3">
                  {addedItems.map(item => (
                    <CartItem
                      key={item.id}
                      {...item}
                      onDelete={() => handleRemoveItem(item.id)}
                      onQuantityChange={(q) => updateQuantity(item.id, q)}
                      removing={removingIds.includes(item.id)}
                      AddItemList={false}
                    />
                  ))}
                </div>

                <div className="subtotal d-flex align-items-center justify-content-between">
                  <div className="sb-tl" id="subTotal">Subtotal: ${subtotal.toFixed(2)}</div>
                </div>
              </div>

              <div className="search-and-share">
                <div className="search-product">
                  <div className="search">
                    <div className="input-wrapper">
                      <input
                        type="search"
                        placeholder="Search Products"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <i className="ri-search-line"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="all-cart-items py-1 mt-3">
                <div className="cartListBox">
                  {filteredItems.map(item => (
                    <CartItem
                      key={item.id}
                      {...item}
                      AddItemList={true}
                      onAddToList={() => handleAddToList(item)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer footerDefault={false} footerOnlyDesc={true} />
    </div>
  );
};

export default Share;

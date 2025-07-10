import React, { useState } from 'react';
import CartItem from '../product-page/CartItem';
import Modal from '../common/PopupModal';

const TopPicks = () => {
  const [selectedOption, setSelectedOption] = useState('share'); // 'share' | 'myPicks' | 'addProducts'
  const [showModal, setShowModal] = useState(false);

  const [selectedProducts, setSelectedProducts] = useState([]);



  const allCartItems = [
    { id: 1, name: 'Welcome Kit', price: '$80', quantity: 2, image: '../images/product-img-2.webp', itemCode: '105', },
    { id: 2, name: 'Balance', price: '$80', quantity: 2, image: '../images/product-img-2.webp', itemCode: '103/500ml' },
    { id: 3, name: 'Lipstick', price: '$80', quantity: 2, image: '../images/product-img-2.webp', itemCode: '262/No5' },
    { id: 4, name: 'Lipstick', price: '$200', quantity: 1, image: '../images/product-img-1.webp', itemCode: '103/500ml' },
    { id: 5, name: 'Lipstick', price: '$80', quantity: 2, image: '../images/product-img-2.webp', itemCode: '262/No5' },
    { id: 6, name: 'Lipstick', price: '$200', quantity: 1, image: '../images/product-img-1.webp', itemCode: '103/500ml' },
  ];

  const handleAddProduct = (item) => {
    if (!selectedProducts.find((p) => p.id === item.id)) {
      setSelectedProducts([...selectedProducts, item]);
    }
  };


  const handleRemoveProduct = (id) => {
  setSelectedProducts((prev) => prev.filter((item) => item.id !== id));
};

const [isGridView, setIsGridView] = useState(false);

  return (
    <div className="top-picks setting-desc-itm ">
      <div className="head-tt">My Top Picks</div>
      <p className="mt-3 head-dsc">
        Personalize Your Website – Showcase your favorite Ipar products or let us auto-fill top sellers in your market.
        Update anytime to attract more customers!
      </p>

      <div className="checkRadionInput mb-5 mt-5">
        <div className="picks-selection ps-lg-5 ps-md-0 p-0">
          <div className="share-picks">
            <div
              className="radio-checkmark"
              onClick={() => setSelectedOption('share')}
            >
              <div className={`radio-input ${selectedOption === 'share' ? 'activeLabelInput' : ''}`}></div>
              <span>Share Ipar’s Best-Selling Products</span>
            </div>
          </div>

          <div className="my-picks mt-4">
            <div
              className="radio-checkmark"
              onClick={() => setSelectedOption('myPicks')}
            >
              <div className={`radio-input ${selectedOption === 'myPicks' ? 'activeLabelInput' : ''}`}></div>
              <span>Choose My Top Picks</span>
            </div>
          </div>

          {selectedOption !== 'share' && (
            <div className="add-products mt-3 ps-4">
              <div
                className="radio-checkmark"
                onClick={() => {
                  setSelectedOption('addProducts');
                  setShowModal(true);
                }}
              >
                <div className={`radio-input ${selectedOption === 'addProducts' ? 'activeLabelInput' : ''}`}></div>
                <span>Add Products</span>
              </div>
            </div>
          )}

          {selectedOption !== 'share' && (
            <div className="product-items mt-5" id="productItems">
              {selectedProducts.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  itemCode={item.itemCode}
                  showControls={true}
                  onDelete={() => handleRemoveProduct(item.id)} 
                />
              ))}
            </div>
          )}
        </div>

        <div className="btn-sec text-end mt-5">
          <button className="tsp-btn">Cancel</button>
          <button className="black-btn black-btn-sm nextBtn px-4">Save</button>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} className='large-modal'>
        <div id="addProductsModal">
          <div className="modal-header">
            <h5>Add product</h5>
          </div>
          <div className="modal-body pt-4">
            <p>
              Quickly browse and discover your favorite Ipar products. Just type
              in a product name, keyword, or item number to get started!
            </p>

            <div className="d-flex align-items-center justify-content-between gap-2">
              <div className="search-product">
                <div className="input-wrapper">
                  <input type="search" placeholder="Search..." />
                  <i className="ri-search-line"></i>
                </div>
              </div>
              <div className="grid-flex d-flex align-items-center gap-2">
                <div
                  className={`grid ${isGridView ? 'active' : ''}`}
                  onClick={() => setIsGridView(true)}
                >
                  <i className="ri-grid-fill"></i>
                </div>
                <div
                  className={`list-view ${!isGridView ? 'active' : ''}`}
                  onClick={() => setIsGridView(false)}
                >
                  <i className="ri-list-check"></i>
                </div>
              </div>


            </div>

            <div className={`all-cart-items py-1 mt-3 ${isGridView ? 'gridActiveView' : ''}`}>
              {allCartItems.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  itemCode={item.itemCode}
                  showControls={false}
                  onAdd={() => handleAddProduct(item)}
                  ForAddProduct={true}
                  onDelete={() => handleRemoveProduct(item.id)} 
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default TopPicks;

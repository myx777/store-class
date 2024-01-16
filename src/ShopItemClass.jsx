import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ShopItemClass extends Component {
    render() {
        const { brand, title, description, descriptionFull, price, currency } = this.props.item;
    
        return (
            <div className="main-content">
              {/* Название производителя товара */}
                <h2>{brand}</h2>
              {/* Название товара */}
              <h1>{title}</h1>
              {/* Краткое описание товара */}
              <h3>{description}</h3>
              {/* Подробное описание товара */}
              <div className="description">{descriptionFull}</div>
              {/* Выделенное окно (для мобильных устройств) */}
              <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
              </div>
              {/* Разделитель */}
              <div className="divider"></div>
              {/* Информация о покупке (цена и кнопка добавления в корзину) */}
              <div className="purchase-info">
                {/* Цена товара с валютой */}
                <div className="price">{`${currency}${price.toFixed(2)}`}</div>
                {/* Кнопка "Добавить в корзину" */}
                <button>Добавить в корзину</button>
              </div>
            </div>
        );
    }
}

ShopItemClass.propTypes = {
    item: PropTypes.shape({
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      descriptionFull: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  };

  export default ShopItemClass;
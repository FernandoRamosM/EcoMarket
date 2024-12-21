import { useEffect, useState } from 'react';
import { Header } from './Header'; // Asegúrate de que la ruta sea correcta

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/ecomarket/productos');
        if (!response.ok) {
          throw new Error('Error al obtener productos');
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const onAddProduct = product => {
    if (allProducts.find(item => item.id === product.id)) {
      const updatedProducts = allProducts.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      return setAllProducts([...updatedProducts]);
    }

    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
    setAllProducts([...allProducts, { ...product, quantity: 1 }]);
  };

  return (
    <div className='container-items'>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setTotal={setTotal}
      />
      {products.map(product => (
        <div className='item' key={product.id}>
          <figure>
            <img src={product.img} alt={product.name} />
          </figure>
          <div className='info-product'>
            <h2>{product.name}</h2>
            <p className='price'>${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
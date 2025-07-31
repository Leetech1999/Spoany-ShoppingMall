import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs} from 'swiper/modules';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { calculateItemTotal, validateCartItem } from '../utils/cartUtils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function ProductDetail(){
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  //상품 데이터 저장 
  const [product, setProduct] = useState(null);
  //const [product, setProduct] = useState({images:[]});

  useEffect(()=>{
    console.log( location.pathname, location.state );
    if( location.state && location.state.product ){
      setProduct(location.state.product);
    }else{
      console.log('제품 데이터 가져오는 중...');
    }
  }, [location, id])

  const handleColorChange = useCallback((color)=>{
    setSelectedColor(color);
  },[]);
  const handleSizeChange = useCallback((size)=>{
    setSelectedSize(size);
  },[]);
  const handleQuantityChange = useCallback((change)=>{
    setQuantity(prevquantity=> Math.max(1, prevquantity+change));
  },[]);
  const totalPrice = useMemo(()=>{
    return product ? calculateItemTotal({...product, quantity}) : 0
  },[product, quantity]);

  const handleAddCart = useCallback(()=>{
    if(!product){ return; }
    //장바구니에 전단할 아이템 객체 생성
    const cartItem = {
      id: id,
      name: product.name,
      price: product.discountPrice || product.price,
      quantity:quantity,
      selectedColor:selectedColor,
      selectedSize:selectedSize,
      image:product.images[0]
    }
    //redux dispatch로 cartpage에 action(addToCart) 전달 
    try{
      validateCartItem(cartItem); // 아이템 데이터가 유효한지 검사
      dispatch(addToCart(cartItem));//redux store에 장바구니 추가 액션 요청
      alert('제품정보를 장바구니에 전달 성공');
      navigate('/cart'); // 페이지 이동
    }catch(err){
      console.error('유효성 검사 에러', err.message);
    }
  },[dispatch, product, id, selectedColor, selectedSize, quantity, navigate]);

  
  if(!product){
    return <div> 제품데이터 없음 </div>
  }

  return(
    <div className="product-detail">
      <div className="product-images">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{swiper:thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper:null}}
          modules={[Navigation, Thumbs]}
          className="main-swiper"
        >
          { //product.images && product.images.map() 
            product.images?.map((img,index)=>(
              <SwiperSlide key={index}>
                {/* `${process.env.PUBLIC_URL}/${img}` */}
                <img src={img} alt={index+1} /> 
              </SwiperSlide>
            ))
          }
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="thumbs-swiper"
        >
          {
            product.images?.map((img,index)=>(
              <SwiperSlide key={index}>
                {/* `${process.env.PUBLIC_URL}/${img}` */}
                <img src={img} alt={index+1} /> 
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="product-info">        
        <h2>{product.name}</h2>
        <div className="price">
          <span className="original-price">{product.price.toLocaleString()}원</span>
          <span className="discount-price">혜택가격 : 
            {
            product.discountPrice ? product.discountPrice.toLocaleString(): product.price.toLocaleString()
            }            
          원</span>
        </div>
        <div className="color-selection">
          <h3>COLOR</h3>
          {
            product.colors?.map((color)=>(
              <button onClick={()=>{handleColorChange(color)}}
                key={color} className={selectedColor === color ? 'selected':''}>
                {color}
              </button>
            ))
          }
        </div>
        <div className="size-selection">
          <h3>SIZE</h3>
          {
            product.sizes?.map((size)=>(
              <button onClick={()=>{handleSizeChange(size)}}
                key={size} className={selectedSize === size ? 'selected':''}>
                {size}
              </button>
            ))
          }
        </div>
        <div className="quantity-selection">
          <h3>수량선택</h3>
          <p>
            <button onClick={()=>{ handleQuantityChange(-1) }}> - </button>
            <span>{ quantity }</span>
            <button onClick={()=>{ handleQuantityChange(1) }}> + </button>
          </p>
        </div>
        <div className="total-price">
          <h3>TOTAL</h3> : <span>{totalPrice.toLocaleString()}원</span>
        </div>
        <div className="action-buttons">
          <button className="buy-now">즉시 구매</button>
          <button className="add-to-cart" onClick={handleAddCart}>장바구니 담기</button>
          <button className="wishlist">위시리스트</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
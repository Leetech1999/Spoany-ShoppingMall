import { Link } from "react-router-dom";

function SpecialItem() {
  const specialItems = [
    {
      id: "special-1",
      images: [
        "/images/B_3699_1.png",
        "/images/B_3699_1.png",
        "/images/B_3699_1.png",
      ],
      name: "런드리서핑 운동복 세제 500ml ( 바투볼롱 )",
      review: 112,
      price: 30000,
      discountPrice: 18000,
      colors: ["바투볼롱"],
      sizes: ["500ml"],
    },
    {
      id: "special-2",
      images: [
        "/images/B_3700_1.png",
        "/images/B_3700_1.png",
        "/images/B_3700_1.png",
      ],
      name: "런드리서핑 운동복 세제 500ml ( 중문 )",
      review: 961,
      price: 30000,
      discountPrice: 18000,
      colors: ["중문"],
      sizes: ["500ml"],
    },
    {
      id: "special-3",
      images: [
        "/images/B_3701_1.png",
        "/images/B_3701_1.png",
        "/images/B_3701_1.png",
      ],
      name: "런드리서핑 운동복 세제 20mlX15개입 ( 바투볼롱 )",
      review: 1827,
      price: 25500,
      discountPrice: 15750,
      colors: ["바투볼롱"],
      sizes: ["20mlX15개입"],
    },
    {
      id: "special-4",
      images: [
        "/images/B_3702_1.png",
        "/images/B_3702_1.png",
        "/images/B_3702_1.png",
      ],
      name: "런드리서핑 운동복 세제 20mlX15개입 ( 중문 )",
      review: 49,
      price: 25500,
      discountPrice: 15750,
      colors: ["중문"],
      sizes: ["20mlX15개입"],
    },
  ];
  return (
    <section className="special-wrap">
      <h2>SPECIAL ITEM</h2>
      <p>스포애니의 썸머 빅세일! 최대 50%할인 놓치지 마세요!</p>
      <div className="special-box">
        <div className="special-top">
          <Link to="/shop">
            <img
              src="/images/special_top.png"
              alt="Muse:horse'king collection... Go Shop"
            />
          </Link>
        </div>
        <div className="special-product">
          <ul>
            {specialItems.map((item) => (
              <li key={item.id}>
                <Link to={`/product/${item.id}`} state={{ product: item }}>
                  <img
                    src={
                      item.images && item.images.length > 0
                        ? item.images[0]
                        : "error.jpg"
                    }
                    alt={item.name}
                  />
                  <h3>{item.name}</h3>
                  <p>
                    <span className="review"> review {item.review}</span>
                  </p>
                  <p>
                    {item.discountPrice && (
                      <>
                        {/* style={{textDecoration:'line-through',fontStyle:'italic'}} */}
                        <span className="discount">
                          &#8361; {item.discountPrice.toLocaleString()} 원
                        </span>{" "}
                        /&nbsp;
                      </>
                    )}
                    <strong>
                      &#8361;{" "}
                      {item.price
                        ? item.price.toLocaleString()
                        : "Price not available"}{" "}
                      원
                    </strong>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialItem;

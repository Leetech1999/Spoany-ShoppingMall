import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./BestItem.css";

const category = {
  전체: [
    {
      id: "best-all-1", // 고유 id
      images: ["B_3635_1.png", "B_3635_1.png", "B_3635_1.png"],
      name: "퍼스트 펭귄 에너지드링크", // 제품명
      review: 367, // 리뷰 개수
      price: 36000, //가격
      discountPrice: 24000, //할인된 가격
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-all-2",
      images: ["B_3660_1.png", "B_3660_1.png", "B_3660_1.png"],
      name: "뉴로볼 neuro ball",
      review: 962,
      price: 42500,
      discountPrice: 39800,
      colors: ["BLUE"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-all-3",
      images: ["B_3659_1.png", "B_3659_1.png", "B_3659_1.png"],
      name: "김종국 블랙마카1800",
      review: 1287,
      price: 55000,
      discountPrice: 19900,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-all-4",
      images: ["B_3710_1.png", "B_3710_1.png", "B_3710_1.png"],
      name: "스포애닭 3종 혼합 세트",
      review: 49,
      price: 81000,
      discountPrice: 45000,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
  ],
  다이어트: [
    {
      id: "best-top-1",
      images: ["B_3710_1.png", "B_3710_1.png", "B_3710_1.png"],
      name: "스포애닭 3종 혼합 세트",
      review: 49,
      price: 81000,
      discountPrice: 45000,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-top-2",
      images: ["B_3725_1.png", "B_3725_1.png", "B_3725_1.png"],
      name: "스포애닭 양념치킨 30봉",
      review: 962,
      price: 84000,
      discountPrice: 45000,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-top-3",
      images: ["B_3724_1.png", "B_3724_1.png", "B_3724_1.png"],
      name: "스포애닭 데리야끼 30봉",
      review: 1287,
      price: 84000,
      discountPrice: 45000,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-top-4",
      images: ["B_3723_1.png", "B_3723_1.png", "B_3723_1.png"],
      name: "스포애닭 오리지널 30봉",
      review: 49,
      price: 75000,
      discountPrice: 45000,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
  ],
  헬스용품: [
    {
      id: "best-bottom-1",
      images: ["B_3687_1.png", "B_3687_1.png", "B_3687_1.png"],
      name: "COMMA 팔꿈치 보호대",
      review: 367,
      price: 69000,
      discountPrice: 49000,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-bottom-2",
      images: ["B_3688_1.png", "B_3688_1.png", "B_3688_1.png"],
      name: "COMMA 무릎보호대",
      review: 962,
      price: 69000,
      discountPrice: 49000,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-bottom-3",
      images: ["B_3689_1.png", "B_3689_1.png", "B_3689_1.png"],
      name: "COMMA 복압 벨트",
      review: 1287,
      price: 41000,
      discountPrice: 32900,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-bottom-4",
      images: ["B_3690_1.png", "B_3690_1.png", "B_3690_1.png"],
      name: "COMMA SBD벨트",
      review: 49,
      price: 99000,
      discountPrice: 69000,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
  ],
  보충제: [
    {
      id: "best-etc-1",
      images: ["B_3659_1.png", "B_3659_1.png", "B_3659_1.png"],
      name: "김종국 블랙마카1800",
      review: 367,
      price: 55000,
      discountPrice: 19900,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-etc-2",
      images: ["B_1656_1.png", "B_1656_1.png", "B_1656_1.png"],
      name: "컴뱃 웨이 프로틴2.3kg",
      review: 962,
      price: 87000,
      discountPrice: 57000,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-etc-3",
      images: ["B_3647_1.png", "B_3647_1.png", "B_3647_1.png"],
      name: "모노크레아틴 플러스600g",
      review: 1287,
      price: 95000,
      discountPrice: 33900,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
    {
      id: "best-etc-4",
      images: ["B_1732_1.png", "B_1732_1.png", "B_1732_1.png"],
      name: "매스게이너 초코맛4kg",
      review: 49,
      price: 85000,
      discountPrice: 60000,
      colors: ["BLACK"],
      sizes: ["ONE SIZE"],
    },
  ],
};

function BestItem() {
  return (
    <section className="best-item">
      <h2>BEST ITEM</h2>
      <p>스포애니의 베스트아이템을 만나보세요.</p>
      <Tabs>
        <TabList className="tabs">
          {
            //객체 모든 속성의 키들로 배열 반환 Object.keys()
            Object.keys(category).map((category) => (
              <Tab
                key={category}
                className="tab-btn"
                selectedClassName="tab-btn-selected"
              >
                {category}
              </Tab>
            ))
          }
        </TabList>
        {Object.entries(category).map(([category, items], idx) => (
          <TabPanel key={category}>
            <div className="tab-panel">
              {items.map((item, index) => (
                <div key={item.id} className="item-box">
                  <Link to={`/product/${item.id}`}>
                    <span className="best-rank">
                      BEST
                      <br />
                      {index + 1}
                    </span>
                    <img
                      src={
                        item.images && item.images.length > 0
                          ? `/images/${item.images[0]}`
                          : "/images/error-img.png"
                      }
                      alt={item.name}
                      className="bestitem-img"
                    />
                    <h3 className="item-title">{item.name}</h3>
                    <p className="item-review">review {item.review}</p>
                    <p className="item-price">
                      {item.price && (
                        <span className="gray-text">
                          &#8361;{item.price.toLocaleString()}원
                        </span>
                      )}
                      {item.discountPrice && (
                        <span>
                          {" "}
                          / &#8361;{item.discountPrice.toLocaleString()}원
                        </span>
                      )}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
}

export default BestItem;

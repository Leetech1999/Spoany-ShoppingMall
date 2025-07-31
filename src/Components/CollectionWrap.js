import { Link } from "react-router-dom";

function CollectionWrap() {
  const collectImages = [
    "/images/exhibition_bn02.png",
    "/images/exhibition_bn03.png",
    "/images/exhibition_bn05.png",
    "/images/exhibition_bn07.png",
  ];
  return (
    <section className="collection-wrapper">
      <h2>COLLECTION ITEM</h2>
      <p>아직 경험해 보지 못한 당신을위해 준비한 기획전 아이템!</p>
      <div className="item-box">
        <div className="leftItem">
          <Link to="/product">
            <img src="/images/exhibition_bn01.png" alt="collection item" />
          </Link>
        </div>
        <div class="rightItems">
          {collectImages.map((item, idx) => (
            <Link to="/product" key={idx}>
              <img src={item} alt={`collection item ${idx + 2}`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollectionWrap;

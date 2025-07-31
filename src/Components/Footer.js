import { Link } from "react-router-dom";

function Footer() {
  const footerMenu = [
    {
      title: "MY ACCOUNT",
      links: [
        { name: "Sign In", url: "/sign-in" },
        { name: "Register", url: "/register" },
        { name: "Mypage", url: "/mypage" },
        { name: "Order Status", url: "/order-status" },
      ],
    },
    {
      title: "HELP&SUPPORT",
      links: [
        { name: "Ordering", url: "/ordering" },
        { name: "Shipping", url: "/shipping" },
        { name: "Returns", url: "/returns" },
        { name: "Sizing", url: "/sizing" },
      ],
    },
    {
      title: "ABOUT US",
      links: [
        { name: "Our story", url: "/our-story" },
        { name: "Offline shop", url: "/offline-shop" },
        { name: "Investors", url: "/investors" },
        { name: "Recruit", url: "/recruit" },
      ],
    },
    {
      title: "DESIGN",
      links: [
        { name: "Fabric", url: "/fabric" },
        { name: "Technology", url: "/technology" },
        { name: "Competitiveness", url: "/competitiveness" },
        { name: "Product Care", url: "/product-care" },
      ],
    },
  ];
  return (
    <footer id="main-footer">
      <div className="footer-top">
        <div className="innerbox">
          <h3>GLOBAL SITE</h3>
          <ul>
            <li>
              <Link to="/cn">cn</Link>
            </li>
            <li>
              <Link to="/en">en</Link>
            </li>
            <li>
              <Link to="/jp">jp</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-menu">
        <ul>
          {footerMenu.map((list, index) => (
            <li key={index}>
              <strong>{list.title}</strong>
              <ul>
                {list.links.map((sublist, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sublist.url}>{sublist.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="innerbox">
          <address>
            <p>
              통신판매업신고번호 : 2014-경기성남-1303 호 사업자등록번호 :
              129-86-66817
            </p>
            <p>
              대표이사 : 이규정 개인정보관리책임자 : 김경덕 사업장소재지:
              서울특별시 송파구 충민로 10, 5층 E13호(문정동, 가든파이브툴)
            </p>
            <p>ⓒ 2020 kdsports. All rights reserved</p>
          </address>
          <ul>
            <li>
              <Link to="/privacy-policy">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="/terms-of-use">이용안내</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">이용약관</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

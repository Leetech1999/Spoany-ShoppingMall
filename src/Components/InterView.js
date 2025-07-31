import { Link } from "react-router-dom";

function InterView() {
  const interviews = [
    {
      id: "interview-1",
      image: "images/interview03.jpg",
      title: "일러스트레이터 AM327 작가",
      subtitle: "균형 있는 삶의 찬미",
      description:
        "균형 있는 삶을 지향하며 자신만의 중심을 가진 일러스트레이터 AM327 작가의 이야기",
    },
    {
      id: "interview-2",
      image: "images/interview01.png",
      title: "뮤즈 말왕",
      subtitle: "New muse of spoany",
      description:
        "시원시원한 웃음이 매력적인 백만유튜버 말왕와 스포애니의 콜라보레이션",
    },
    {
      id: "interview-3",
      image: "images/interview02.jpg",
      title: "피트니스 모델 장유진",
      subtitle: "장유진의 이름",
      description:
        "트레이너에서 비키니 선수로 엄마가 되기까지 언제나 운동으로 땀 흘릴 때 가장 빛나는 그녀의 이야기",
    },
  ];

  return (
    <section className="interview-wrap">
      <h2>INTERVIEW</h2>
      <p>몸과 마음이 건강한 삶을 향유하는 스포애니의 엠버서더 인터뷰</p>
      <div className="content-wrap">
        {interviews.map((interview, index) => (
          <div key={interview.id} className={`interview${index + 1}`}>
            <img src={interview.image} alt={interview.title} />
            <h3>
              <span>{interview.title}</span>
              {interview.subtitle}
            </h3>
            <p>{interview.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InterView;

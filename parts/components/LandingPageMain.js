import PropTypes from "prop-types";

const LandingPageMain = ({ children, props }) => {
  return (
    <>
      <section class="first">
        <div class="backgroundImage" style={{ backgroundImage: "url(img/3.jpeg)" }}></div>
        <h1>반려생활 궁금증 PetGuru와 함께</h1>
        <h3>반려생활 궁금증 PetGuru와 함께</h3>
      </section>

      <section class="second">
        <h3 class="title">About</h3>
        <p>
          전문 훈련사와 함께 여러분의 반려동물을 더 깊이 알아가세요!
          <br />
          <br />
          너와 이야기를 나눌 수 있으면 얼마나 좋을까.
          <br />
          어디가 아픈지, 니 생각이 어떤지 알 수 있으면 얼마나 좋을까.
          <br />
          <br />
          내 반려동물의 행동과 증상을 등록하면
          <br />
          PetGuru의 검증된 전문 훈련사와 많은 경험의 애견/애묘인들이 답을 줄
          거에요!
        </p>
        <br />
        <hr />
        <ul class="grid">
          <li class="small" style={{ backgroundImage: "url(img/4.jpeg)" }}></li>
          <li class="large" style={{ backgroundImage: "url(img/4.jpeg)" }}></li>
          <li class="large" style={{ backgroundImage: "url(img/4.jpeg)" }}></li>
          <li class="small" style={{ backgroundImage: "url(img/4.jpeg)" }}></li>
        </ul>
      </section>

      <section class="third">
        <h3 class="title">PetGuru Service</h3>
        <p>
        
        </p>
        <hr />

        <ul class="grid">
          <li>
          <i class="fas fa-question"></i>
            <h4>질문하기</h4>
            <p>
              내 반려동물에 대해 궁금한 부분이 생기셨나요? PetGuru에 질문해보세요. PetGuru에 등록된 전문 훈련사 및 수의사들이 답변 해 줄거에요!
            </p>
          </li>
          <li>
          <i class="fas fa-stethoscope"></i>
            <h4>진단받기</h4>
            <p>
              저희 PetGuru에는 인증받은 전문 훈련사들과 수의사들이 등록되어 있습니다. 전문적이고 정확한 진단과 답변을 받을 수 있습니다!
            </p>
          </li>
          <li>
          <i class="fas fa-search"></i>
            <h4>내 반려견 찾기</h4>
            <p>
              반려동물을 잃어버리셨나요? PetGuru에 실종신고를 해보세요. 반려동물 정보와 실종위치를 등록하면 주변의 회원들에게 도움을 받을 수 있어요!
            </p>
          </li>
        </ul>
      </section>
      {children}
    </>
  );
};

LandingPageMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingPageMain;

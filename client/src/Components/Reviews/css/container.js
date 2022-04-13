import styled from 'styled-components';

const Box = {
  Container: styled.div`
  display: flex;
  justify-content: center
  `,
  InnerCol: styled.div`
  flexDirection: column;
  padding-right: 2%;
  `,
  ReviewSum: styled.div`
  display: flex;
  flex-grow: 1;
  height: 0px;
  margin: 1em;
  border: 0px solid rgb(75, 21, 163);
  `,
  Star: styled.img`
  height: 10px;
  width: 10px
  `,
  Rating: styled.h1`
  padding: 0px;
  margin: 0px;
  padding-right: 10px;
  color: rgb(75, 21, 163);
  `,
  Bar: styled.div`
  width: 210px;
  background-image: url(./assets/bar.webp);
  background-repeat: no-repeat;
  `,
  Triangle: styled.img`
  height: 15px;
  width: 15px
  `,
  CharText: styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  padding-bottom: 15px;
  margin: 0px;
  `,
  Review: styled.div`
  flexDirection: column;
  border-bottom: double;
  width: 500px;
  `,
  ReviewHeader: styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  `,
  BottomButton: styled.div`
  width: 50px;
  height: 10px;
  border: 2px;
  `,
  Modal: styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.25);
  z-index: 90;
  `,
  ModalContent: styled.div`
  position: fixed;
  background: white;
  width: 50vw;
  height: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1%;
  z-index: 100;
  overflow-y: scroll
  `,
  Close: styled.div`
  display: flex;
  justify-content: flex-end;
  width: 48vw;
  `,
  CenterInfo: styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  `,
  Info: styled.div`
    flexDirection: column;
    height: 40vh
    overflow-y: scroll
  `,
  StarRating: styled.img`
  height: 30px;
  width: 30px
  `,
  StarCheck: styled.img`
  height: 15px;
  width: 15px
  `,
  Progress: styled.progress`
  background-color: #ECECEC;
  `,
};

export default Box;

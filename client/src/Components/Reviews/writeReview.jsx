import React, { useState, useEffect, useContext } from 'react';
import Box from './css/container';
import PickRating from './pickRating.jsx'
import PickCharacteristics from './pickCharacteristics.jsx';
import currentProducts from '../../Contexts/CurProdContext';

const axios = require('axios');

const WriteReview = function ({ setRenderModal, setRender, characteristics }) {
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [char, setChar] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { currentProd } = useContext(currentProducts);

  const submitHandler = function () {

    if (rating === 0) {
      alert('rating has not been filed');
    } else if (recommend === null) {
      alert('recommend has not been filed');
    } else if (summary === '') {
      //take this one out and put in char
      alert('summary has not been filed');
    } else if (body.length < 50) {
      alert('body has not been filed');
    } else if (name === '') {
      alert('name has not been filed');
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      alert('email is not valid');
    } else if (Object.keys(characteristics).length !== Object.keys(char).length) {
      alert('characteristics has not been filed');
    } else {
      axios.post('reviews/post', {
        product_id: currentProd.id,
        rating,
        summary,
        body,
        recommend,
        name,
        email,
        photos: [],
        characteristics: char,
      })
        .then(() => setRenderModal(false))
        .catch(() => console.log('error in axios'));
    }
  };
  return (
    <div>
      <Box.Modal>
        <Box.ModalContent>
          <Box.Close onClick={() => setRender(false)}><div>X</div></Box.Close>
          <Box.CenterInfo>
            <Box.Info>
              *Overall rating:
              <PickRating rating={rating} setRating={setRating} />
              <br />
              *Recommend:
              <form>
                {recommend === true
                  ? <Box.StarCheck src="./assets/fullStar.webp" alt="full star" onClick={() => setRecommend(true)} />
                  : <Box.StarCheck src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRecommend(true)} />}
                Yes
                {recommend === false
                  ? <Box.StarCheck src="./assets/fullStar.webp" alt="full star" onClick={() => setRecommend(false)} />
                  : <Box.StarCheck src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRecommend(false)} />}
                No
              </form>
              <br />
              *Characteristics
              {Object.keys(characteristics).map((e) => (
                <PickCharacteristics
                  key={characteristics[e].id}
                  charKey={characteristics[e].id}
                  lable={e}
                  char={char}
                />
              ))}
              <div>
                <br />
                Review summary
              </div>
              <input type="text" name="sum" required maxLength="60" size="60" value={summary} onChange={(e) => setSummary(e.target.value)} />
              <div>
                <br />
                *Review Body
              </div>
              <input type="text" name="sum" required maxLength="1000" size="60" value={body} onChange={(e) => setBody(e.target.value)} />
              <br />
              {body.length}
              /50 minimum of 50 characters to submit.
              <br />
              <br />
              *Nickname
              <input type="text" name="sum" required maxLength="60" size="30" value={name} onChange={(e) => setName(e.target.value)} />
              <br />
              <br />
              *Email
              <input type="text" name="sum" required maxLength="60" size="30" value={email} onChange={(e) => setEmail(e.target.value)} />
              <br />
              <br />
              <button onClick={() => submitHandler()}>
                Submit
              </button>
            </Box.Info>
          </Box.CenterInfo>
        </Box.ModalContent>
      </Box.Modal>
    </div>
  );
};
export default WriteReview;

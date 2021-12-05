import React from 'react'
import './Create_summary.css'
import './media-queries.css'

import logoimg from '../../images/logo.jpg'

const CreateSummary = () =>{
  return(
    <div className="container">
      <div className="header_summer">
        <img src={logoimg} alt="" className="header__logo" />
        <h5 className = "header__tittle_font">Ineffable</h5>
      </div>
      <div className="body_summer">
        <div className="body_summary_container">
          <h2 className="body__tittle_font">
            Создание резюме
          </h2>
          <div className="TextForInputs">
            <h6 className="Text">
              Имя и фамилия
            </h6>
            <h6 className="require">
              *
            </h6>
          </div>
          <input type="text" className="name" />
          <div className="TextForInputs">
            <h6 className="Text">
              Год рождения
            </h6>
            <h6 className="require">
              *
            </h6>
          </div>
          <input type="text" className="birth" />
          <div className="TextForInputs">
            <h6 className="Text">
              Желаемая должность
            </h6>
            <h6 className="require">
              *
            </h6>
          </div>
          <input type="text" className="jobs" />
          <div className="TextForInputs">
            <h6 className="Text">
              E-mail или мобильный телефон
            </h6>
            <h6 className="require">
              *
            </h6>
          </div>
          <input type="text" className="email" />
          <button onClick={() => {
            const name = document.querySelector('.name').value;
            const birth = document.querySelector('.birth').value;
            const jobs = document.querySelector('.jobs').value;
            const email = document.querySelector('.email').value;
            if (name === "" || birth === "" || jobs === "" || email === ""){
              alert("Заполните поля")
            }
            else{
              alert("Вы зарегистрировались")
            }
          }} className="ButtonContinue">Продолжить</button>
          <p className="TextRules">
            Регистрируясь, вы принимаете условия <a href="http://www.cbr.ru/user_agreement/">ПРАВИЛА и СОГЛАШЕНИЯ</a> об использовании сайта
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateSummary;
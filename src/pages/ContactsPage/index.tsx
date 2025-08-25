import { useState } from "react";
import { useForm } from "react-hook-form";

import socials from "assets/socials";
import icons from "assets/icons";

import { motion } from "framer-motion";
import styles from "./contacts.module.scss";

const ContactsPage = () => {
  const [openWindow, setOpenWindow] = useState(false);

  const [inputValue, setInputValue] = useState({
    firstInput: "",
    secondInput: "",
    textarea: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = () => {
    setOpenWindow(true);
    setInputValue((prev) => ({
      ...prev,
      firstInput: "",
      secondInput: "",
      textarea: "",
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.col_1}>
            <h2>Контакты</h2>
            <p className={styles.desc_1}>
              Если у Вас есть пожелания, предложения или претензии по <br />
              организации работы сайта мы всегда рады услышать Ваше <br />{" "}
              мнение.
            </p>
            <div className={styles.desc_2}>
              <div className={styles.wrapper_2}>
                <div>
                  <img src={icons.geoWhite} alt="geoWhite-img" />
                </div>
                <p>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>
              </div>
              <div className={styles.wrapper_2}>
                <div>
                  <img src={icons.phoneWhite} alt="phoneWhite-img" />
                </div>
                <div className={styles.contacts}>
                  <p>+375 29 621-48-33</p>
                  <div style={{ marginLeft: "20px" }}>
                    <img src={socials.viberWhite} alt="viber-img" />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <img src={socials.telegramWhite} alt="tg-img" />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <img src={socials.whatsAppWhite} alt="whatsApp-img" />
                  </div>
                </div>
              </div>
              <div className={styles.wrapper_2}>
                <div>
                  <img src={icons.letter} alt="letter-img" />
                </div>
                <p style={{ textDecoration: "underline" }}>
                  <a href="mailto: sdaem@sdaem.by">sdaem@sdaem.by</a>
                </p>
              </div>
              <div className={styles.wrapper_2}>
                <div>
                  <img src={icons.watch} alt="watch-img" />
                </div>
                <p>
                  <span>Режим работы:</span> 08:00-22:00
                </p>
              </div>
            </div>
            <p className={styles.owner}>
              ИП Шушкевич Андрей Викторович <br /> УНП 192602485 Минским
              горисполкомом 10.02.2016
            </p>
            <div className={styles.warning}>
              <img src={icons.warning} alt="warning-img" />
              <p>
                Администрация сайта не владеет информацией <br /> о наличии
                свободных квартир
              </p>
            </div>
          </div>
          <form className={styles.col_2} onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "40px 30px 0px 38px" }}>
                <p>Ваше имя</p>
                <div
                  className={styles["input-wrapper"]}
                  style={{
                    border: errors.name && "2px solid red",
                  }}
                >
                  <img src={icons.userGray} alt="userGray-img" />
                  <input
                    type="name"
                    {...register("name", { required: true })}
                    placeholder={
                      errors.name ? `Заполните поле` : "Заполните поле"
                    }
                    onChange={(e) => {
                      clearErrors("name");
                      setInputValue((prev) => ({
                        ...prev,
                        firstInput: e.target.value,
                      }));
                    }}
                    autoComplete="on"
                    value={inputValue.firstInput}
                  />
                  <img
                    src={icons.alert}
                    alt="alert-img"
                    style={{ display: errors.name ? "block" : "none" }}
                  />
                </div>
              </div>
              <div style={{ margin: "40px 0px 0px 0px" }}>
                <p>Ваша электронная почта</p>
                <div
                  className={styles["input-wrapper"]}
                  style={{
                    border: errors.email && "2px solid red",
                  }}
                >
                  <img
                    src={socials.email}
                    alt="email-img"
                    style={{ opacity: "0.3" }}
                  />
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      minLength: 5,
                      maxLength: 30,
                    })}
                    placeholder={
                      errors.email ? `Заполните поле` : "Заполните поле"
                    }
                    onChange={(e) => {
                      clearErrors("email");
                      setInputValue((prev) => ({
                        ...prev,
                        secondInput: e.target.value,
                      }));
                    }}
                    autoComplete="on"
                    value={inputValue.secondInput}
                  />
                  <img
                    src={icons.alert}
                    alt="alert-img"
                    style={{ display: errors.email ? "block" : "none" }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.textarea}>
              <p>Ваше сообщение</p>
              <textarea
                style={{ border: errors.textarea && "2px solid red" }}
                {...register("textarea", {
                  required: true,
                  minLength: 5,
                  maxLength: 3000,
                })}
                placeholder={errors.textarea ? `Сообщение` : "Сообщение"}
                onChange={(e) => {
                  clearErrors("textarea");
                  setInputValue((prev) => ({
                    ...prev,
                    textarea: e.target.value,
                  }));
                }}
                autoComplete="on"
                value={inputValue.textarea}
              />
            </div>
            <button type="submit">Отправить</button>
          </form>
          <div className={styles.icons}>
            {[socials.instWhite, socials.vkWhite, socials.faceBookWhite].map(
              (social) => (
                <div>
                  <img src={social} alt="social-img" />
                </div>
              )
            )}
          </div>
        </div>
        <div
          className={styles.modal_window}
          style={{ display: openWindow ? "block" : "none" }}
        >
          <h2>
            Ваше письмо <br /> отправлено!
          </h2>
          <p>
            Какое-то сообщение о том, что письмо <br /> отправлено, какое-то
            сообщение, что <br /> письмо отправлено.
          </p>
          <button onClick={() => setOpenWindow(false)}>Закрыть окно</button>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactsPage;

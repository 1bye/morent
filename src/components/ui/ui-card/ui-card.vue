<template>
  <div class="car_card">
    <div class="card__header">
      <div class="header__item">
        <div class="card__title">{{ name }}</div>
        <div class="card__subtitle">{{ type }}</div>
      </div>
      <div class="card__heart">
        <svg v-if="!liked" xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
          <path d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.68998C1 3.59998 3.49 1.09998 6.56 1.09998C8.38 1.09998 9.99 1.97998 11 3.33998C12.01 1.97998 13.63 1.09998 15.44 1.09998C18.51 1.09998 21 3.59998 21 6.68998C21 13.69 14.52 17.82 11.62 18.81Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="liked" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
          <path d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z" fill="#ED3F3F"/>
        </svg>
      </div>
    </div>

    <div class="card__content">
      <div class="card__img">
        <img :src="img" alt="cardImage">
        <div class="card__smoke"></div>
      </div>
    </div>

    <div class="card__footer">
      <div class="card__specification">
        <p><img src="public/gasoline.svg" alt="gasoline">{{ gasoline }}L</p>
        <p><img src="public/steering.svg" alt="gasoline">{{ steering }}</p>
        <p><img src="public/capacity.svg" alt="gasoline">{{ capacity }}People</p>
      </div>

      <div class="card__footer__bottom">
        <div class="card__cost">
          <div v-if="!discount">
            <p class="money">${{ cost }}.00/ <span class="day">day</span></p>
          </div>
          <div v-if="discount">
            <p class="money">${{ costDiscount }}.00/ <span class="day">day</span></p>
            <p class="discount">${{ cost }}.00</p>
          </div>
        </div>

        <ui-btn-round>Rent Now</ui-btn-round>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ui-card",
  components: {},

  props: {
    name: String,
    type: String,
    liked: Boolean,
    img: String,
    gasoline: Number,
    steering: String,
    capacity: Number,
    cost: Number,
    discount: Boolean,
    costDiscount: Number,
  }
}
</script>

<style lang="scss" scoped>

  .car_card {
    width: 304px;
    height: 388px;

    background: #FFFFFF;
    border-radius: 10px;

    padding: 24px;

    .card__header {
      display: flex;
      justify-content: space-between;
    }

    .card__heart { margin-top: 2px }

    .card__title {
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;

      color: #1A202C;
    }

    .card__subtitle {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;

      color: #90A3BF;
    }
  }

  .card__content {
    height: 202px;
    display: flex;
    align-items: center;

    .card__img {
      display: flex;
      height: fit-content;
      justify-content: center;
      width: 100%;

      .card__smoke {
        width: 304px;
        height: 68px;
        position: absolute;

        opacity: 0.5;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);

        &:hover {
          opacity: 0.6;
        }
      }
    }



  }

  .card__footer {
    .card__specification {
      display: flex;
      flex-direction: row;
      gap: 16px;
      margin-bottom: 24px;

      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;

        display: flex;
        gap: 6px;
        align-items: center;

        color: #90A3BF;
      }
    }

    .card__footer__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .card__cost {
        .money {
          font-weight: 700;
          font-size: 20px;
          line-height: 25px;
          color: #1A202C;
        }
        .day {
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          color: #90A3BF;
        }
        .discount {
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          text-decoration-line: line-through;

          color: #90A3BF;
        }
      }
    }
  }

</style>
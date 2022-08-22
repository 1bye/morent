<template>
  <footer>
    <div class="footer__inner">
      <div class="upper_footer">
        <div class="footer__item">
          <p class="logo">MORENT</p>
          <p class="logo__text">Our vision is to provide convenience and help increase your sales business.</p>
        </div>

        <div class="footer__item">
          <div class="footer__list">
            <label>About</label>
            <ul>
              <li><a href="">How it works</a></li>
              <li><a href="">Featured</a></li>
              <li><a href="">Partnership</a></li>
              <li><a href="">Business Relationship</a></li>
            </ul>
          </div>

          <div class="footer__list">
            <label>Community</label>
            <ul>
              <li><a href="">Events</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Podcast</a></li>
              <li><a href="">Invite a friend</a></li>
            </ul>
          </div>

          <div class="footer__list">
            <label>Socials</label>
            <ul>
              <li><a href="">Discord</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">Twitter</a></li>
              <li><a href="">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="down__footer">
        <div class="footer__item">
          <p>©2022 MORENT. All rights reserved</p>
          <div class="footer__items">
            <a href="">Privacy & Policy</a>
            <a href="">Terms & Condition</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ui-footer"
}
</script>

<style lang="scss" scoped>

  footer {
    height: 480px;
    width: 100vw;
    display: flex;
    justify-content: center;

    background: #ffffff;

    .footer__inner {
      width: calc(1440px - (64px * 2));
      padding: 80px 0 60px 0;
    }
  }
  .upper_footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    
    @media (max-width: 840px) {
      flex-direction: column;
      align-items: center;
      gap: 60px;
    }

    .footer__item {
      @media (max-width: 500px) {
        flex-direction: column !important;
      }
      .logo {
        color: #3563E9;
        font-weight: 700;
        font-size: 32px;
        line-height: 120%;
        letter-spacing: 1px;
        margin-bottom: 16px;
        @media (max-width: 840px) {
          text-align: center;
        }
      }
      .logo__text {
        font-weight: 500;
        font-size: 16px;
        line-height: 200%;
        letter-spacing: -0.01em;
        color: rgba(19, 19, 19, 0.6);
        width: 292px;
        @media (max-width: 840px) {
          text-align: center;
        }
      }
      .footer__list {
        @media (max-width: 840px) {
          text-align: center;
        }

        label {

          font-weight: 600;
          font-size: 20px;
          line-height: 120%;
          color: #131313;
        }
        ul {
          margin-top: 24px;
        }
        li {
          margin-bottom: 16px;
        }
        a {
          font-weight: 500;
          font-size: 16px;
          line-height: 120%;
          color: rgba(19, 19, 19, 0.6);
          text-decoration: none;
        }
      }

      &:last-child {
        display: flex;
        flex-direction: row;
        gap: 60px;
      }
    }
  }
  .down__footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:before {
      content: '';
      width: 100%;
      height: 0;
      border: 1px solid rgba(19, 19, 19, 0.16);
      margin-bottom: 48px;
    }

    .footer__item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
      }

      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 200%;
        letter-spacing: -0.01em;

        color: #131313;
      }

      .footer__items {
        display: flex;
        gap: 60px;
        a {
          font-weight: 600;
          font-size: 16px;
          line-height: 200%;
          letter-spacing: -0.01em;

          color: #131313;
          text-decoration: none;
        }
      }
    }
  }

</style>
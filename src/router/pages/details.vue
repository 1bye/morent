<template>

  <ui-header />
  <ui-filter/>
  <ui-container class="details">
    <div class="details__content">
      <div class="__upper">
        <div class="__item__images">

          <div class="__view">
            <div class="__details">
              <div class="__title">Sports car with the best design and acceleration</div>
              <div class="__text">
                Safety and comfort while driving a
                futuristic and elegant sports car
              </div>
            </div>

            <img src="public/ads/ad3.png">
          </div>
          <div class="__list">
            <div class="__img">
              <img src="public/detail/View%201.png" alt="">
            </div>
            <div class="__img">
              <img src="public/detail/View%202.png" alt="">
            </div>
            <div class="__img">
              <img src="public/detail/View%203.png" alt="">
            </div>
          </div>

        </div>
        <div class="__item__desc">

          <div class="__header">
            <div class="__item">
              <div class="__title">Nissan GT - R</div>
              <div class="__subtitle"><ui-star-review :count="4"/>440+ Reviewer</div>
            </div>

            <ui-heart liked />
          </div>

          <div class="__content">
            <div class="__desc">
              NISMO has become the embodiment of
              Nissan's outstanding performance,
              inspired by the most unforgiving proving ground, the "race track".
            </div>

            <div class="__specification">
              <div class="__spec">
                <p>Type Car <span>    Sport</span></p>
                <p>Steering  <span>   Manual</span></p>
              </div>

              <div class="__spec">
                <p>Capacity <span>    2 Person</span></p>
                <p>Gasoline <span>    70L</span></p>
              </div>
            </div>
          </div>

          <div class="__footer">
            <div class="__price">
              <div class="__title">$80.00/ <span>days</span></div>
              <div class="__subtitle">$100.00</div>
            </div>

            <ui-btn-round style="height: 56px">Rent Now</ui-btn-round>
          </div>
        </div>
      </div>
    </div>

    <div class="__reviews">
      <div class="__header"><p>Reviews</p><span>13</span></div>
    </div>
  </ui-container>

</template>

<script>
export default {
  name: "details",
  components: {}

}
</script>

<style scoped>

</style>
<template>

  <ui-header></ui-header>
  <ui-container style="background: #F6F7F9">
    <div class="content">
      <ui-ads />
      <ui-pick-drop/>
      <div class="row popular_car">
        <div class="nav__item">
          <p class="nav__title">Popular Car</p>
          <a href="" class="nav__link">View All</a>
        </div>
        <ui-card-list style="margin-top: 20px">
          <ui-card :name="'Koenigsegg'" :type="'Sport'" :liked="true" :img="'public/cars/koenigsegg.png'"
                   :gasoline="90" :steering="'Manual'" :capacity="2" :cost="99" :discount="false"/>
          <ui-card :name="'Nissan GT - R'" :type="'Sport'" :liked="false" :img="'public/cars/nissangt-r.png'"
                   :gasoline="80" :steering="'Manual'" :capacity="2" :cost="100" :discount="true" :costDiscount="80"/>
          <ui-card :name="'Rolls - Royce'" :type="'Sedan'" :liked="true" :img="'public/cars/rolls-royse.png'"
                   :gasoline="70" :steering="'Manual'" :capacity="4" :cost="96" :discount="false"/>
          <ui-card :name="'Nissan GT - R'" :type="'Sport'" :liked="false" :img="'public/cars/nissangt-r2.png'"
                   :gasoline="80" :steering="'Manual'" :capacity="2" :cost="100" :discount="true" :costDiscount="80"/>


        </ui-card-list>
      </div>
      <div class="row recommend__car">
        <div class="nav__item">
          <p class="nav__title">Recommendation Car</p>
        </div>

        <ui-card-list style="margin-top: 20px; margin-bottom: 64px;">
          <ui-card :name="'Koenigsegg'" :type="'Sport'" :liked="true" :img="'public/cars/koenigsegg.png'"
                   :gasoline="90" :steering="'Manual'" :capacity="2" :cost="99" :discount="false"/>
          <ui-card :name="'Nissan GT - R'" :type="'Sport'" :liked="false" :img="'public/cars/nissangt-r.png'"
                   :gasoline="80" :steering="'Manual'" :capacity="2" :cost="100" :discount="true" :costDiscount="80"/>
          <ui-card :name="'Rolls - Royce'" :type="'Sedan'" :liked="true" :img="'public/cars/rolls-royse.png'"
                   :gasoline="70" :steering="'Manual'" :capacity="4" :cost="96" :discount="false"/>
          <ui-card :name="'Nissan GT - R'" :type="'Sport'" :liked="false" :img="'public/cars/nissangt-r2.png'"
                   :gasoline="80" :steering="'Manual'" :capacity="2" :cost="100" :discount="true" :costDiscount="80"/>
          <ui-card :name="'Koenigsegg'" :type="'Sport'" :liked="true" :img="'public/cars/koenigsegg.png'"
                   :gasoline="90" :steering="'Manual'" :capacity="2" :cost="99" :discount="false"/>
          <ui-card :name="'Nissan GT - R'" :type="'Sport'" :liked="false" :img="'public/cars/nissangt-r.png'"
                   :gasoline="80" :steering="'Manual'" :capacity="2" :cost="100" :discount="true" :costDiscount="80"/>
          <ui-card :name="'Rolls - Royce'" :type="'Sedan'" :liked="true" :img="'public/cars/rolls-royse.png'"
                   :gasoline="70" :steering="'Manual'" :capacity="4" :cost="96" :discount="false"/>
          <ui-card :name="'Nissan GT - R'" :type="'Sport'" :liked="false" :img="'public/cars/nissangt-r2.png'"
                   :gasoline="80" :steering="'Manual'" :capacity="2" :cost="100" :discount="true" :costDiscount="80"/>



        </ui-card-list>

        <div class="show__more">
          <ui-btn-round>Show more car</ui-btn-round>
          <p>120 Car</p>
        </div>

      </div>
    </div>


  </ui-container>
  <ui-footer />

</template>

<script>
export default {
  name: "Index",
  components: {}

}
</script>

<style scoped>

</style>
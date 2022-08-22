<template>

  <ui-header/>
  <div style="display: flex; flex-grow: 1;">
    <ui-filter/>
    <ui-container class="categories">
      <ui-pick-drop category/>
      <ui-card-list style="justify-content: center;">
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

      <ui-footer style="width: 110%; margin-top: 32px"/>
    </ui-container>
  </div>



</template>

<script>
export default {
  name: "Category",
  components: {}

}
</script>

<style lang="scss" scoped>

</style>
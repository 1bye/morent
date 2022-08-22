<template>
  <div v-if="!category" class="row cars__rent">

    <div class="car__rent">
      <div class="car__rent__title">
        <img src="public/mark1.svg" alt=""><p>Pick - Up</p>
      </div>
      <div class="car__rent__body">
        <div class="car__rent__locations">
          <label for="">Locations</label>
          <ui-dropdown :title="'Select your city'"></ui-dropdown>
        </div>
        <div class="line"></div>
        <div class="car__rent__date">
          <label for="">Date</label>
          <ui-dropdown :title="'Select your date'"></ui-dropdown>
        </div>
        <div class="line"></div>
        <div class="car__rent__time">
          <label for="">Time</label>
          <ui-dropdown :title="'Select your time'"></ui-dropdown>
        </div>
      </div>
    </div>
    <ui-btn-round-circle><img src="public/Swap.svg" alt=""></ui-btn-round-circle>
    <div class="car__rent">
      <div class="car__rent__title">
        <img src="public/mark2.svg" alt=""><p>Drop - Off</p>
      </div>
      <div class="car__rent__body">
        <div class="car__rent__locations">
          <label for="">Locations</label>
          <ui-dropdown :title="'Select your city'"></ui-dropdown>
        </div>
        <div class="line"></div>
        <div class="car__rent__date">
          <label for="">Date</label>
          <ui-dropdown :title="'Select your date'"></ui-dropdown>
        </div>
        <div class="line"></div>
        <div class="car__rent__time">
          <label for="">Time</label>
          <ui-dropdown :title="'Select your time'"></ui-dropdown>
        </div>
      </div>
    </div>

  </div>
  <div v-if="category" class="row cars__rent category__cars__rent">

    <div class="car__rent">
      <div class="car__rent__title">
        <img src="public/mark1.svg" alt=""><p>Pick - Up</p>
      </div>
      <div class="car__rent__body">
        <div class="car__rent__locations">
          <label for="">Locations</label>
          <ui-dropdown :title="'Select your city'"></ui-dropdown>
        </div>
        <div class="line"></div>
        <div class="car__rent__date">
          <label for="">Date</label>
          <ui-dropdown :title="'Select your date'"></ui-dropdown>
        </div>
        <div class="line"></div>
        <div class="car__rent__time">
          <label for="">Time</label>
          <ui-dropdown :title="'Select your time'"></ui-dropdown>
        </div>
      </div>
    </div>
    <ui-btn-round-circle><img src="public/Swap.svg" alt=""></ui-btn-round-circle>
    <div class="car__rent">
      <div class="car__rent__title">
        <img src="public/mark2.svg" alt=""><p>Drop - Off</p>
      </div>
      <div class="car__rent__body">
        <div class="car__rent__locations">
          <label for="">Locations</label>
          <ui-dropdown :title="'Select your city'"></ui-dropdown>
        </div>
        <div class="line"></div>
        <div class="car__rent__date">
          <label for="">Date</label>
          <ui-dropdown :title="'Select your date'"></ui-dropdown>
        </div>
        <div class="line"></div>
        <div class="car__rent__time">
          <label for="">Time</label>
          <ui-dropdown :title="'Select your time'"></ui-dropdown>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ui-pick-drop",
  props: {
    category: Boolean
  }
}
</script>

<style lang="scss" scoped>

  //.category__cars__rent {
  //  gap: 0;
  //  button:nth-child(2){
  //    transform: translateX(-12px);
  //    z-index: 1;
  //  }
  //  .car__rent:nth-child(3) {
  //    transform: translateX(-24px);
  //    z-index: 0;
  //  }
  //
  //  .car__rent {
  //    padding: 24px 0 0 24px;
  //    width: 486px;
  //  }
  //}

  .category__cars__rent {
    flex-direction: column;
    align-items: center;
    gap: 0;
    button:nth-child(2){
      margin-top: 0 !important;
      transform: translateY(-12px);
      z-index: 1;

      box-shadow:0 0 20px 2px rgba(16, 50, 147, 0.32);
    }
      .car__rent:nth-child(3) {
        transform: translateY(-24px);
        z-index: 0;
      }
  }

</style>
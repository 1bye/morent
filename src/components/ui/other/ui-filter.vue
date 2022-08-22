<template>
  <div class="filter">
    <div class="type">
      <div class="__title">T Y P E</div>
      <ul class="__content">
        <li>
          <input type="checkbox" id="Sport">
          <label for="Sport">Sport <span>(10)</span></label>
        </li>

        <li>
          <input type="checkbox" id="SUV">
          <label for="SUV">SUV <span>(12)</span></label>
        </li>

        <li>
          <input type="checkbox" id="MPV">
          <label for="MPV">MPV <span>(16)</span></label>
        </li>

        <li>
          <input type="checkbox" id="Sedan">
          <label for="Sedan">Sedan <span>(20)</span></label>
        </li>
        <li>
          <input type="checkbox" id="Coupe">
          <label for="Coupe">Coupe <span>(14)</span></label>
        </li>

        <li>
          <input type="checkbox" id="Hatchback">
          <label for="Hatchback">Hatchback <span>(14)</span></label>
        </li>
      </ul>
    </div>
    <div class="capacity">
      <div class="__title">C A P A C I T Y</div>
      <ul class="__content">
        <li>
          <input type="checkbox" id="2Person">
          <label for="2Person">2 Person <span>(10)</span></label>
        </li>

        <li>
          <input type="checkbox" id="4Person">
          <label for="4Person">4 Person <span>(14)</span></label>
        </li>

        <li>
          <input type="checkbox" id="6Person">
          <label for="6Person">6 Person <span>(12)</span></label>
        </li>

        <li>
          <input type="checkbox" id="8Person">
          <label for="8Person">8 or More <span>(16)</span></label>
        </li>

      </ul>
    </div>
    <div class="price">
      <div class="__title">P R I C E</div>
      <div class="__content">

        <input type="range" min="1" max="100">
        <p>Max. $100.00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ui-filter"
}
</script>

<style scoped>

</style>
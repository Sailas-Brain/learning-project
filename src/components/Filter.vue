<template>
  <div class="catalog">
    <div class="catalog__inner-container">
      <div class="">

      </div>
      <h2 class="catalog__title">Дуэльные настольные игры</h2>
      <div class="">
        <div class="filter">
          <vue-collapsible-panel-group accordion>
            <vue-collapsible-panel :expanded="true">
              <template #title>
                Все категории
              </template>
              <template #content>
                <!-- <vue-collapsible-panel-group accordion> -->
                  <vue-collapsible-panel :expanded="true">
                    <template #title>
                      Настольные игры
                    </template>
                    <template #content>
                      <button class="filter__btn">Вечериночные игры</button>
                      <button class="filter__btn">Детективные игры</button>
                      <button class="filter__btn">Детские игры</button>
                      <button class="filter__btn">Дуэльные игры</button>
                      <button class="filter__btn">Карточные игры</button>
                      <button class="filter__btn">Классические игры</button>
                      <button class="filter__btn">Книги-игры</button>
                      <button class="filter__btn">Кооперативные игры</button>
                      <button class="filter__btn">Наборы игр</button>
                      <button class="filter__btn">Приключенческие игры</button>
                      <button class="filter__btn">Семейные игры</button>
                      <button class="filter__btn">Стратегические игры</button>
                      <button class="filter__btn">Хардкорные игры</button>
                      <button class="filter__btn">Экономические игры</button>         
                    </template>
                  </vue-collapsible-panel>
                  <vue-collapsible-panel>
                    <template #title>
                      Warhammer 40000
                    </template>
                    <!-- <template #content>
                      Panel B Content
                    </template> -->
                  </vue-collapsible-panel>
                  <vue-collapsible-panel>
                    <template #title>
                      Magic: the Gathering
                    </template>
                  </vue-collapsible-panel>
                  <vue-collapsible-panel>
                    <template #title>
                      <button class="button">Аксессуры для игр</button>
                    </template>
                  </vue-collapsible-panel>
                  <vue-collapsible-panel>
                    <template #title>
                      Краски
                    </template>
                  </vue-collapsible-panel>
                  <vue-collapsible-panel>
                    <template #title>
                      Товары для детей
                    </template>
                  </vue-collapsible-panel>
                  <vue-collapsible-panel>
                    <template #title>
                      Аксессуары для моделизма
                    </template>
                  </vue-collapsible-panel>
                <!-- </vue-collapsible-panel-group> -->
                    
              </template>
            </vue-collapsible-panel>
          </vue-collapsible-panel-group>
        </div>

        <div class="catalog__card">

        </div>
      </div>
      <div class="catalog__questions">

      </div>
    </div>
  </div>
</template>

<script>


export default {


}
</script>

<style lang="scss">

  button {
    display: block;
    cursor: pointer;
    width: 100%;
    background: $--color-white;
    border: 0;
    outline: 0;
  }

  .catalog {
    width: 100%;
    background: $--color-background;
    padding: 0 20px;

    &__inner-container {
      max-width: 1110px;
      margin: 0 auto;
    }


    &__title {
      margin-top: 10px;
      margin-bottom: 20px;
    }

    .filter {
      width: 255px;

      &__btn {
        display: block;
        cursor: pointer;
        width: 100%;
        padding-left: 20px;
        text-align: start;
        background: inherit;

        font-family: 'trebuchetms';
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: rgba(42, 42, 42, 0.85);


        border: 0;
        outline: 0;
      }
    }

  }

  /* filter */
  .vcpg {
    background: $--color-white;
    box-shadow: 5px 6px 16px rgba(42, 42, 42, 0.16);
    border-radius: 9px;

    font-family: 'trebuchetms';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: $--color-main;

    padding-top: 15px;
    padding-bottom: 10px;

  }

  .vcp__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .vcp__header-title {
    padding-bottom: 13px;
    padding-top: 5px;
  }

  .vcp__body {
    height: auto !important;
  }

  .vcp__body-content {
    box-sizing: border-box;
    padding-left: 20px;
    margin-bottom: 5px;

  }

  .vcp__header-icon {
    svg {

      margin-top: 2px;
    }
  }





</style>

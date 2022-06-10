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
                      Аксессуры для игр
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

            <div class="container__prise">
              <vue-collapsible-panel :expanded="true">
                <template #title>
                  Цена
                </template>
                <template #content>
                  <div class="checkbox__custom">
                   <label class="check-box">
                      <input type="checkbox" name="ages3-5">
                      <span></span>
                      3-5 лет
                    </label>
                  </div>
                </template>
              </vue-collapsible-panel>
            </div>

            <div class="container__checkbox">
              <vue-collapsible-panel :expanded="true">
                <template #title>
                  Возрасты
                </template>
                <template #content>
                  <div class="checkbox__custom">
                    <label class="check-box">
                      <input type="checkbox" name="ages3-5">
                      <span></span>
                      3-5 лет
                    </label>
                  </div>
                  <div class="checkbox__custom">
                    <label class="check-box">
                      <input type="checkbox" name="ages6-7">
                      <span></span>
                      6-7 лет
                    </label>
                  </div>
                  <div class="checkbox__custom">
                    <label class="check-box">
                      <input type="checkbox" name="ages8-12" checked>
                      <span></span>
                      8-12 лет
                    </label>
                  </div>
                  <div class="checkbox__custom">
                    <label class="check-box">
                      <input type="checkbox" name="ages13-15">
                      <span></span>13-15 лет
                    </label>
                  </div>
                  <div class="checkbox__custom">
                    <label class="check-box">
                      <input type="checkbox" name="ages16-17">
                      <span></span>
                      16-17 лет
                    </label>
                  </div>
                  <div class="checkbox__custom">
                    <label class="check-box">
                      <input type="checkbox" name="ages18+">
                      <span></span>
                      более 18 лет
                    </label>
                  </div>
                </template>
              </vue-collapsible-panel>
            </div>

            <div class="container__checkbox">
              <vue-collapsible-panel :expanded="true">
                <template #title>
                  Наличие
                </template>
                <template #content>
                  <div class="checkbox__custom">
                    <label class="check-box">
                      <input type="checkbox" name="availability">
                      <span></span>
                      в наличии
                    </label>
                  </div>
                  <div class="checkbox__custom">
                    <label class="check-box">
                      <input type="checkbox" name="booking">
                      <span></span>
                      под заказ
                    </label>
                  </div>
                  <div class="checkbox__custom">
                    <label class="check-box">
                      <input type="checkbox" name="out-of-stock" checked>
                      <span></span>
                      нет в наличии
                    </label>
                  </div>
                </template>
              </vue-collapsible-panel>
            </div>
            
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

        &:hover,
        &:focus {
          color: #FF7F00;
          transition: color 0.3s ease ;
        }
      }
    }

  }

  /* filter */
  .vcpg {
    background: $--color-white;
    box-shadow: 5px 6px 16px rgba(42, 42, 42, 0.16);
    border-radius: 9px;

    font-family: 'trebuchetms';
    font-weight: 500;
    font-size: 19px;
    line-height: 22px;
    color: $--color-main;
    padding-bottom: 10px;
  }

  .vcp__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .vcp__header-title {
    padding-bottom: 10px;
    padding-top: 15px;
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

  /* checkbox age */      

  .container__checkbox {
    border-top: 2px solid rgba(42, 42, 42, 0.12);
    // border-bottom: 2px solid rgba(42, 42, 42, 0.12);
  }

  .checkbox__custom {
    width: 100%;
    padding: 8px 0;
  }

  .check-box {
    display: flex;
    align-items: center;

    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
  }
  
  .check-box input[type=checkbox] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .check-box span {
    position: relative;
    display: block;
    width: 21px;
    height: 21px;
    border-radius: 7px;
    border: 1px solid rgba(42, 42, 42, 0.38);

    margin-right: 20px;

    &::after {
      position: absolute;
      display: none;
      content: "";
      top: 5px;
      left: 5px;
      width: 10px;
      height: 5px;

      border-bottom: 2px solid $--color-white;
      border-left: 2px solid $--color-white;
      transform: rotate(-45deg);
    }

  }

  .check-box input:checked + span {
    background-color: $--color-active;
  }

  .check-box input:checked + span:after {
    display: block;
  }

   /* checkbox age */  





</style>

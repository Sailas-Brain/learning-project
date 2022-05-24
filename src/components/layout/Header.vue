<template>
  <header class="header">
    <div class="header-top-wrap">
      <div class="header-top">
        <div class="logo header-logo">
          <img class= "" src="@/assets/pictures/Logo.svg">
        </div>

        <div class="search header-search">
          <input class="search-field" type="text" name="search" placeholder="найти игру">
          <button class="search-button" type="submit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#2A2A2A" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <div class="phone header-phone">
          <p class="phone-text">+7 (495) 911-10-11</p>
        </div>


      </div>
    </div>  
      <div>

      </div>
    
  </header>
</template>


<script>
export default {


}
</script>

<style lang="scss" scoped>
  .header {
    max-width: 1600px;
    height: 134px;

  }

  .header-top-wrap {
    background: #2A2A2A;
    width: 100%;
    height: 82px;
  }

  .header-top {
    display: flex;
    margin: 0 auto;
    width: 1110px;
  }

  .search {
    position: relative;
    width: 475px;
    
  }

  .search-field {
    box-sizing: border-box;
    width: 100%;
    height: 38px;

    padding-right: 40px;
    outline: none;
    border: 0;
    border-radius: 10px;
    background: #F2F2F2;
    color: #929292;
  }

  .search-button {
    position: absolute;
    top: 0;
    right: 0;
    height: 38px;
    width: 38px;
    padding-top: 6px;
    background: #F2F2F2;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
  }

  .phone {
    color: #ffffff;
    width: auto;
    height: 30px;

    font-family: "trebuchetms";
    font-weight: 700;
    font-size: 20px;

    box-sizing: border-box;
    padding-left: 35px;
  }

  .header-phone {
    background-image: url(../../assets/pictures/icomoon-free_phone.svg);
    background-repeat: no-repeat;
  }

  .phone-text {

  }



</style>
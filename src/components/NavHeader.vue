<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:void(0)">小米商城</a>
          <a href="javascript:void(0)">MIUI</a>
          <a href="javascript:void(0)">云服务</a>
          <a href="javascript:void(0)">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:void(0)">登录</a>
          <a href="javascript:void(0)">注册</a>
          <a href="javascript:void(0)" class="my-cart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="item-children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="item-children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="item-children"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .header {
    .nav-topbar {
      height: 40px;
      line-height: 40px;
      color: #B0B0B0;
      background-color: #333333;

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          display: inline-block;
          color: #B0B0B0;
          margin-right: 18px;

          &:hover {
            color: #FFFFFF;
          }
        }

        .my-cart {
          width: 110px;
          text-align: center;
          color: #FFFFFF;
          background-color: #FF6600;
          margin-right: 0;

          .icon-cart {
            display: inline-block;
            vertical-align: text-top;
            width: 16px;
            height: 12px;
            background: url("../assets/images/icon-cart-checked.png") no-repeat center center;
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }

    .nav-header {
      .container {
        height: 112px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header-logo {
          width: 55px;
          height: 55px;
          background-color: #FF6600;

          a {
            display: block;
            width: 110px;
            height: 100%;

            &::before {
              content: "";
              display: inline-block;
              width: 55px;
              height: 100%;
              background: url("../assets/images/mi-home.png") no-repeat center center;
              background-size: contain;
              margin-left: -55px;
              transition: margin-left .2s;
            }

            &::after {
              content: "";
              display: inline-block;
              width: 55px;
              height: 100%;
              background: url("../assets/images/mi-logo.png") no-repeat center center;
              background-size: contain;
            }

            &:hover::before {
              margin-left: 0;
              transition: margin-left .2s;
            }
          }
        }

        .header-menu {
          display: inline-block;
          width: 640px;
          padding-left: 210px;

          .item-menu {
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
          }
        }
      }
    }
  }
</style>

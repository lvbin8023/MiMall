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
            <div class="item-children">
              <ul>
                <li class="product">
                  <a href="/product/30" target="_blank">
                    <div class="pro-img">
                      <img alt="3200万+4800万 前后双旗舰相机"
                           data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                           src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                           lazy="loaded">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">￥1799.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="/product/31" target="_blank">
                    <div class="pro-img">
                      <img alt="3200万+4800万 前后双旗舰相机"
                           data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png"
                           src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png"
                           lazy="loaded">
                    </div>
                    <div class="pro-name">小米CC9e</div>
                    <div class="pro-price">￥1299.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="/product/32" target="_blank">
                    <div class="pro-img">
                      <img alt="直出超质感美颜"
                           data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png"
                           src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png"
                           lazy="loaded">
                    </div>
                    <div class="pro-name">小米CC9 美图定制版</div>
                    <div class="pro-price">￥2599.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="/product/33" target="_blank">
                    <div class="pro-img">
                      <img alt="小米9 战斗天使"
                           data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png"
                           src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png"
                           lazy="loaded">
                    </div>
                    <div class="pro-name">小米9</div>
                    <div class="pro-price">￥2599.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="/product/34" target="_blank">
                    <div class="pro-img">
                      <img alt="快的不只是5G"
                           data-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png"
                           src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png"
                           lazy="loaded">
                    </div>
                    <div class="pro-name">小米9 Pro 5G</div>
                    <div class="pro-price">￥3699.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="/product/35" target="_blank">
                    <div class="pro-img">
                      <img alt="5G环绕屏概念手机"
                           data-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png"
                           src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png"
                           lazy="loaded">
                    </div>
                    <div class="pro-name">小米MIX Alpha</div>
                    <div class="pro-price">￥19999.00元</div>
                  </a>
                </li>
              </ul>
            </div>
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
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:void(0)"></a>
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
        position: relative;
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
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;

            &:hover {
              color: #FF6600;

              .item-children {
                height: 220px;
                opacity: 1;
              }
            }

            span {
              cursor: pointer;
            }

            .item-children {
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 0;
              opacity: 0;
              overflow: hidden;
              border-top: 1px solid #E5E5E5;
              box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.11);
              z-index: 10;
              transition: all .5s;
              background-color: #ffffff;

              .product {
                position: relative;
                /*float: left;*/
                display: inline-block;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;

                a {
                  display: inline-block;

                  .pro-img {
                    height: 137px;

                    img {
                      width: auto;
                      height: 111px;
                      margin-top: 26px;
                    }
                  }

                  .pro-name {
                    font-weight: bold;
                    margin-top: 19px;
                    margin-bottom: 8px;
                    color: #333333;
                  }

                  .pro-price {
                    color: #FF6600;
                  }
                }

                &:before {
                  content: ' ';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid #D7D7D7;
                  height: 100px;
                  width: 1px;
                }

                &:last-child:before {
                  display: none;
                }
              }
            }
          }
        }

        .header-search {
          width: 321px;

          .wrapper {
            height: 55px;
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;

            input {
              border: none;
              box-sizing: border-box;
              border-right: 1px solid #E0E0E0;
              width: 265px;
              height: 100%;
              padding-left: 14px;
            }

            a {
              display: inline-block;
              width: 18px;
              height: 18px;
              background: url("../assets/images/icon-search.png") no-repeat center center;
              background-size: contain;
              margin-left: 19px;
            }
          }
        }
      }
    }
  }
</style>

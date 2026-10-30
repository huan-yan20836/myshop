<script setup>
const newList = [
  { id: 1, name: '懒人小沙发', list_pic_url: '/images/new1.jpg', retail_price: '128.00' },
  { id: 2, name: '2026240401075冯灿', list_pic_url: '/images/new2.jpg', retail_price: '89.00' },
  { id: 3, name: '简约一字夹发夹', list_pic_url: '/images/new3.jpg', retail_price: '12.8' },
  { id: 4, name: '毛线小兔子耳朵发夹', list_pic_url: '/images/new4.jpg', retail_price: '9.9' },
]
</script>

<template>
  <h3>每周上新</h3>
  <ul class="new-list">
    <li v-for="item in newList" :key="item.id">
      <img :src="item.list_pic_url" />
      <p class="name">{{ item.name }}</p>
      <p class="price"><span>￥</span>{{ item.retail_price }}</p>
    </li>
  </ul>
</template>

<style lang="less" scoped>
h3 {
  font-size: 16px;
  font-weight: bold;
  width: 50%;
  border-top: 2px solid #ccc;
  text-align: center;
}

.new-list {
  background-color: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    width: 50%;
    text-align: center;

    img {
      width: 100%;
    }

    .name,
    .price {
      font-size: 12px;
    }

    .price span {
      color: #ff8000;
    }
  }
}
</style>

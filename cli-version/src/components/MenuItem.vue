<!-- <script>
export default {
  name: 'MenuItem',
  props: ['addToShoppingCart', 'image', 'inStock', 'name', 'quantity']
}
</script>

<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt" />
    <div>
      <h3>{{ name }}</h3>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <div>
        <label for="add-item-quantity">Quantity: {{ quantity }}</label>
        <input v-model.number="quantity" id="add-item-quantity" type="number" />
        <button @click="addToShoppingCart(quantity)">
          Add to Shopping Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style></style> -->

<template>
  <div class="menu-item">
    <h3>{{ name }}</h3>

    <img class="menu-item__image" :src="image.source" :alt="image.alt" />
    <div>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <label for="add-item-quantity">Quantity: {{ localQuantity }}</label>
      <input v-model.number="localQuantity" id="add-item-quantity" type="number" />
      <BaseButton @click="updateShoppingCart(localQuantity)">
        Add to Shopping Cart
      </BaseButton>
    </div>
    
    <p v-if="dayIsEven">Price: {{ discountedPrice }}</p>
    <p v-else>Price: {{ price }}</p>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
import { mapActions } from 'vuex'

export default {
  name: 'MenuItem',
  components: {
    BaseButton
  },

props: {
    
    image: {
      type: Object,
      required: true
    },
    inStock : {
      type: Boolean,
      required: true
    },
    name : {
      type : String,
      required : true
    },
    quantity : {
      type : Number,
      default: 1
    },
    price :{
      type: Number,
      required: true
    }
  },
  data() {
    return {
      localQuantity: this.quantity, // Initialize localQuantity with the prop value
      dayIsEven: false,
      discountedPrice: 0
    };  
  },
  methods: {
    ...mapActions(['updateShoppingCart'])
    
  },

  beforeMount() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    this.dayIsEven = day % 2 === 0;
    if (this.dayIsEven) {
      this.discountedPrice = this.price * 0.9; // Apply 10% discount
    }
  },

 
}
</script>


<style lang="scss">
   .menu-item {
    display: flex;
    width: 500px;
    justify-content: space-between;
    margin-bottom: 30px;
    &__image {
    max-width: 300px;
    } 
  }
</style>
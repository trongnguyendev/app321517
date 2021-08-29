<template>
    <section class="bg bg zindex">
        <div class="product-similar">
            <v-card-subtitle>You may like</v-card-subtitle>
            <v-card-title>Similar Products</v-card-title>
            <v-card-text>Products you may also like based on what you're currently looking at.</v-card-text>
            <br>
            <client-only>
                <carousel
                :paginationEnabled="false"
                >
                    <slide 
                    v-for="(slide, index) in slidesCategories" :key="index"
                    >
                        <div class="slide-item" v-bind:style="{ backgroundImage: 'url(' + slide.img + ')' }">
                            <div class="gradient-card"></div>
                            <div class="d-flex content">
                                <div class="slide-content align-center margin-left-0 align-center margin-top-0">
                                    <h5 class="des-icon text-center">EazyMobile</h5>
                                    <v-list-item-icon class="item-icon size-13 margin-left-0 margin-botom-0 color-yellow-star margin-top-0">
                                        <font-awesome-icon :icon="['fas', 'star']"/>
                                        <font-awesome-icon :icon="['fas', 'star']"/>
                                        <font-awesome-icon :icon="['fas', 'star']"/>
                                        <font-awesome-icon :icon="['fas', 'star']"/>
                                        <font-awesome-icon :icon="['fas', 'star']"/>
                                    </v-list-item-icon>
                                </div>
                                <v-btn class="view-more">View</v-btn>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </client-only>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
      slidesCategories: [
          { img: require('@/assets/images/banner1_categories.jpg') },
          { img: require('@/assets/images/banner2_categories.jpg') },
          { img: require('@/assets/images/banner3_categories.jpg') }
      ],
      Categories: [
          { name: 'Phone', active: false },
          { name: 'Headsets', active: false },
          { name: 'Consoles', active: true },
          { name: 'Softwares', active: false },
          { name: 'Technicals', active: false }
      ],
      switch1: true,
    }),
}
</script>
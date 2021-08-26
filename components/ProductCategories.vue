<template>
    <section class="product-categories">
        <client-only>
            <carousel
            :perPage="4"
            autoplay
            :autoplayTimeout="3000"
            autoplayHoverPause
            :paginationEnabled="false"
            class="slide-categories"
            >
                <slide v-for="(item, index) in Categories" :key="index">
                    <span v-bind:class="{'categories-ative': item.active}" class="slide-category-item">{{ item.name }}</span>
                </slide>
            </carousel>
        </client-only>
        <client-only>
            <carousel
            :paginationEnabled="false"
            >
                <slide 
                v-for="(slide, index) in slidesCategories" :key="index"
                
                >
                    <div class="slide-item" v-bind:style="{ backgroundImage: 'url(' + slide.img + ')' }">
                        <div class="gradient-card"></div>
                        <h3 class="slide-content">
                            <del>$3,519<sup>.99</sup></del>
                            <span>$1759<sup>.99</sup></span>
                        </h3>

                        <div class="icon-top">
                            <span><font-awesome-icon :icon="['fas', 'shopping-bag']"/></span>
                        </div>
                    </div>
                    <div class="slide-more">
                        <span>In Stock</span>
                        <h4>Studio</h4>
                        <h4>Microphone</h4>
                    </div>
                </slide>
            </carousel>
        </client-only>
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
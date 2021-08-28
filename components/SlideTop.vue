<template>
    <section class="slideTop">
        <client-only>
            <carousel
            :perPage="1"
            autoplay
            :autoplayTimeout="3000"
            autoplayHoverPause
            :paginationEnabled="false"
            value="2"
            loop="true"
            >
                <slide 
                v-for="(slide, index) in slidesTop" :key="index"
                v-bind:style="{ backgroundImage: 'url(' + slide.img + ')' }"
                class="slide-item">
                    <div class="textSlide">
                        <div class="panel-blur"></div>
                        <div class="text-bottom">
                            <h3>{{ slide.name }}</h3>
                            <p>{{ slide.description }}</p>
                        </div>
                        <div class="icon-top">
                            <span><font-awesome-icon :icon="['fas', 'shopping-bag']"/></span>
                            <span><font-awesome-icon :icon="['fas', 'heart']"/></span>
                        </div>
                    </div>
                </slide>
            </carousel>
        </client-only>
    </section>
</template>

<script>
export default {
    data: () => ({
      switchDark: false,
      slidesTop: [
          { img: require('@/assets/images/banner1_slidetop.jpg'), name: 'IPone XL', description: 'Space Gray with 256GB Storage and 32 GB DDR4' },
          { img: require('@/assets/images/banner2_slidetop.jpg'), name: 'AirPods Pro', description: 'In Ear Headset with Wireless Charging Case' },
          { img: require('@/assets/images/banner3_slidetop.jpg'), name: 'IPone XL', description: 'Space Gray with 256GB Storage and 32 GB DDR4' }
      ],
      imgHeaderNavigation: require('@/assets/images/banner1_slidetop.jpg')
    }),
}
</script>
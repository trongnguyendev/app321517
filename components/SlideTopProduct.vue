<template>
    <section>
        <div class="slideTop slideTopProduct">
            <client-only>
                <carousel
                :perPage="1"
                autoplay
                :autoplayTimeout="3000"
                autoplayHoverPause
                :paginationEnabled="false"
                :loop="true"
                >
                    <slide 
                    v-for="(slide, index) in slidesTop" :key="index"
                    v-bind:style="{ backgroundImage: 'url(' + slide.img + ')' }"
                    class="slide-item">
                        <div class="textSlide">
                            <div class="panel-blur"></div>
                            <div class="text-bottom align-center w-100 ">
                                <h3 class="text-center">{{ slide.name }}</h3>
                                <p class="text-center">{{ slide.description }}</p>
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
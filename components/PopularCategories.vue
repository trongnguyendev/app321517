<template>
    <section class="popular-categories">
        <h1 class="title-categories">Popular Categories</h1>
        <client-only>
            <carousel
            :paginationEnabled="false"
            >
                <slide 
                v-for="(slide, index) in slidesCategories" :key="index"
                
                >
                    <div class="slide-item" v-bind:style="{ backgroundImage: 'url(' + slide.img + ')' }">
                        <div class="gradient-card"></div>
                        <h3 class="slide-content">Apple</h3>
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
    }),
}
</script>
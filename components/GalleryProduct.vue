<template>
    <section class="zindex bg zindex2">
        <div class="galleries-product bg">
            <v-card-subtitle>View In Detail</v-card-subtitle>
            <v-card-title>Product Gallery</v-card-title>
            <v-card-text>Here are the best and most beautiful features our product has to offer. Just tap and move through the images.</v-card-text>
            <br>
            <client-only>
                <CoolLightBox 
                    :items="galleries" 
                    :index="index"
                    @close="index = null">
                </CoolLightBox>
            </client-only>

            <v-row
                justify="space-between"
                class="images-wrapper"
            >
                <v-col
                cols="4"
                v-for="(image, imageIndex) in galleries"
                :key="imageIndex"
                @click="index = imageIndex"
                >
                    <v-card>
                        <img :src="image.src" alt="" class="img-gallery">
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </section>
</template>
<script>
export default {
  data: function () {
    return {
      galleries: [
        { src: require('@/assets/images/1t.jpg'), description: "Photo by Lucas" },
        { src: require('@/assets/images/2t.jpg'), description: "Photo by Facundo", },
        { src: require('@/assets/images/3t.jpg'), description: "Photo by Henry", },
        { src: require('@/assets/images/4t.jpg'), description: "Photo by Brian", },
        { src: require('@/assets/images/5t.jpg'), description: "Photo by Ation",},
        { src: require('@/assets/images/6t.jpg'), description: "Photo by Null", }
      ],
      index: null
    };
  },
};
</script>

<template>
    <section class="padding-0 margin-botom-0 border-bottom">
        <div class="categories-sec radius-top">
            <client-only>
                <carousel
                :perPage="4"
                autoplay
                :autoplayTimeout="3000"
                autoplayHoverPause
                :paginationEnabled="false"
                class="slide-categories margin-botom-0"
                >
                    <slide v-for="(item, index) in Categories" :key="index">
                        <span v-bind:class="{'categories-ative': item.active}" class="slide-category-item">{{ item.name }}</span>
                    </slide>
                </carousel>
            </client-only>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
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
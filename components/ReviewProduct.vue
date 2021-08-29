<template>
    <section class="zindex bg">
        <div class="reviews-product">
            <v-card-subtitle>What Customers Say</v-card-subtitle>
            <v-card-title>Product Reviews</v-card-title>
            <v-card-text>Awesome feedback from our customers that we wanted to share with you! These made our days better!</v-card-text>

            <v-list class="bg-transparent padding-top-bottom-20 border-bottom-last-not" v-for="(item, index) in 2" :key=index>
              <v-list-item class="padding-0">
                <v-list-item-group class="d-flex align-center width-100">
                  <div class="flex-grow-1 d-flex align-center ">
                    <h1 class="fa-3x">5.00</h1>
                    <div>
                      <h5 class="des-icon">average rating</h5>
                      <v-list-item-icon class="item-icon margin-top-0 margin-botom-0 color-yellow-star">
                          <font-awesome-icon :icon="['fas', 'star']"/>
                          <font-awesome-icon :icon="['fas', 'star']"/>
                          <font-awesome-icon :icon="['fas', 'star']"/>
                          <font-awesome-icon :icon="['fas', 'star']"/>
                          <font-awesome-icon :icon="['fas', 'star']"/>
                      </v-list-item-icon>
                    </div>
                  </div>
                  <div>
                    <h6>John Doe</h6>
                    <p class="margin-botom-0">21th March 2025</p>
                  </div>
                </v-list-item-group>
              </v-list-item>
              <p>
                  It's a very complete HTML template and it's really fast as well. I like the way it's setup, did had to do some research before I got to know how it works though. I hope they will keep the support they deliver, because for me that's the most important part of buying a template.
                </p>
            </v-list>
            <v-btn class="view-more">Purchase Today</v-btn>
            <br>
            
        </div>
    </section>
</template>
<script>
export default {
  data: function () {
    return {
      
    };
  },
};
</script>

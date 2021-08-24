<template>
    <section>
        <v-card class="feature-product border-radius-20">
            <v-card-subtitle>Handpicked by our Staff</v-card-subtitle>
            <v-card-title>Featured Products</v-card-title>
            <v-list class="feature-list">
                <v-list-item class="feature-item" v-for="(item, index) in 4" :key="index">
                    <v-list-item-content class="md6">
                        <div class="feature-item-img">
                            <img src="@/assets/images/banner2_slidetop.jpg" alt="">
                        </div>                        
                    </v-list-item-content>
                    <v-list-item-content class="md6">
                        <v-list-item-icon class="feature-item-icon">
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                        </v-list-item-icon>
                        <h5 class="feature-item-title">Brilliant Headset and Mobile</h5>
                        <span>In Stock</span>
                        <h1 class="feature-item-price">
                            $199
                            <sup>.99</sup>
                        </h1>
                        <del>$299<sup>.99</sup> (- 40%)</del>

                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-btn class="view-more">View More Featured Products</v-btn>
        </v-card>
    </section>
</template>
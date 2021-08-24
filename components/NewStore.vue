<template>
    <section>
        <v-card class="newstore border-radius-20">
            <v-card-subtitle>Fresh Arrivals</v-card-subtitle>
            <v-card-title>New in Store</v-card-title>
            <v-list class="feature-list store-list">
                <v-list-item class="store-item md6" v-for="(item, index) in 2" :key="index">
                    <v-list-item-content>
                        <div class="feature-item-img">
                            <img src="@/assets/images/banner2_slidetop.jpg" alt="">
                        </div>                        
                    </v-list-item-content>
                    <v-list-item-content>
                        <v-list-item-icon class="feature-item-icon">
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                        </v-list-item-icon>
                        <span id="view">130 Reviewers</span>
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
            <v-btn class="view-more">View More New Arrivals</v-btn>
        </v-card>
    </section>
</template>
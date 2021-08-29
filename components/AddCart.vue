<template>
    <section class="zindex bg">
        <div class="cart-product">
            <v-card-subtitle>Series 3, Wireless</v-card-subtitle>
            <v-card-title>Airpods Pro</v-card-title>
            <v-card-text>The best Headsets on the Market. Powered by the awesome chip that you don't care about but works awesome with your mobile device and has a decent battery life.</v-card-text>
            <br>
            
            <v-form>
                <div class="d-flex space-between">
                    <div class="">
                        <h4>$199.99</h4>
                        <span class="font-9 poretop-10">VAT not Included</span>
                    </div>
                    <div class="icon-action">
                        <span><font-awesome-icon :icon="['fas', 'heart']"/></span>
                        <span @click="setDrawerShare"><font-awesome-icon :icon="['fas', 'share-alt']"/></span>
                        <span><font-awesome-icon :icon="['fas', 'shopping-bag']"/></span>
                        
                    </div>
                </div>
                <div class="bg-border"></div>
                <v-row>
                    <v-col cols="3">
                        <v-text-field
                        label="Cty"
                        required
                        type="number"
                        class="qty"
                        value="1"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <v-select
                            :items="['Foo', 'Bar']"
                            label="Items"
                            class="clor"
                            value="Foo"
                        ></v-select>
                    </v-col>
                </v-row>
                <div class="bg-border"></div>
                <v-row>
                    <v-col cols="4">
                        <span class="font-9">PWA</span><br>
                        <strong class="font-9">Yes</strong>
                    </v-col>
                    <v-col cols="4">
                        <span class="font-9">Boostrap</span><br>
                        <strong class="font-9">4.4+</strong>
                    </v-col>
                    <v-col cols="4">
                        <span class="font-9">Dark Mode</span><br>
                        <strong class="font-9">Yes</strong>
                    </v-col>
                    <v-col cols="4">
                        <span class="font-9">Cordova</span><br>
                        <strong class="font-9">Compatible</strong>
                    </v-col>
                    <v-col cols="4">
                        <span class="font-9">Components</span><br>
                        <strong class="font-9">100+</strong>
                    </v-col>
                    <v-col cols="4">
                        <span class="font-9">Total Pages</span><br>
                        <strong class="font-9">150+</strong>
                    </v-col>
                </v-row>
                <br>
                <div class="bg-border"></div>
                <div class="d-flex space-between">
                    <div>
                        <p class="margin-botom-0 font-9">Ratings & Reviews</p>
                        <div>
                            <span>4.9</span>
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
                        <p class="margin-botom-0 color-highlight ">98 Reviews</p>
                        <span class="font-9">Verified Customers</span>
                    </div>
                </div>
                <div class="bg-border"></div>
                <v-btn class="view-more">Add to Cart</v-btn>
            </v-form>
        </div>
    </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    methods: {
        ...mapActions([
        'updateMode',
        'toggleSidebar',
        'toggleMenuShare'
        ]),
        setDrawerShare() {
            this.toggleMenuShare()
        },
    }
}
</script>
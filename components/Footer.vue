<template>
    <section>
        <footer class="border-radius-20">
            <h2>AppKit</h2>
            <p>Built to match the design trends and give your page<br>the awesome facelift it deserves.</p>
            <div class="footer-social">
                <span class="ic-list-item gradient-facebook">
                    <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                </span>
                <span class="ic-list-item gradient-twitter">
                    <font-awesome-icon :icon="['fab', 'twitter']"/>
                </span>
                <span class="ic-list-item gradient-linkedin">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
                </span>
                <span class="ic-list-item gradient-whatsapp">
                    <font-awesome-icon :icon="['fab', 'whatsapp']"/>
                </span>
                <span class="ic-list-item gradient-email">
                    <font-awesome-icon :icon="['fas', 'envelope']"/>
                </span>
            </div>
            <div class="more-info">
                <NuxtLink to="/"> Privacy Policy</NuxtLink>
                <v-spacer></v-spacer>
                <NuxtLink to="/">Terms of Service</NuxtLink>
                <v-spacer></v-spacer>
                <NuxtLink to="/">Contact Support</NuxtLink>
            </div>
        </footer>
    </section>
</template>
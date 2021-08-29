<template>
    <main class="main-product bg">
        <SlideTopProduct />
        <div class="margin-top-slide"></div>
        <div class="zindex bg radius-top">
            <Categories />
            <AddCart />
            <GalleryProduct />
            <ReviewProduct />
            <ProductSimilar />
        </div>
    </main>
</template>

<script>
export default {
    data: () => ({
        isProductPage: true
    }),

    created() {
        
    }
}
</script>
import Photo from '@/components/products/detail/photo.vue';
import { shallowMount } from '@vue/test-utils';

describe('photo detail component', () => {

    test('should match with snapshot', () => {
        const wrapper = shallowMount(Photo);
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('main image should has first images of images', () => {
        const wrapper = shallowMount(Photo);
        expect(wrapper.vm.mainImage.image).toBe(wrapper.vm.images[0]);
    });

    test('should change image with setMainImage method', () => {
        const wrapper = shallowMount(Photo);
        wrapper.vm.setMainImage('https://rukminim2.flixcart.com/image/714/857/jcrz6vk0/shoe/g/w/t/ds-1503-10-d-sneakerz-white-original-imafftryhbku8nus.jpeg?q=50', 2);
        expect(wrapper.vm.mainImage).toEqual({
            image: 'https://rukminim2.flixcart.com/image/714/857/jcrz6vk0/shoe/g/w/t/ds-1503-10-d-sneakerz-white-original-imafftryhbku8nus.jpeg?q=50',
            idx: 2
        })
    });

    test('should call setMainImage when click at thumnail', async () => {
        const wrapper = shallowMount(Photo);
        const changeImageFunc = (wrapper.vm.setMainImage = jest.fn());
        await wrapper.findAll('div.product__detail__photo__thumbnail').at(1).trigger('click');
        expect(changeImageFunc).toHaveBeenCalledWith("https://flexi.shoes/blog/wp-content/uploads/sites/7/2018/06/sneaker-clasico-blanco.png", 1)
    });

});
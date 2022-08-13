import Photo from '@/components/products/detail/photo.vue';
import { shallowMount } from '@vue/test-utils';
import { photos } from '~/test/mock-data/test-photo';

describe('photo detail component', () => {
    test('should match with snapshot', () => {
        const wrapper = shallowMount(Photo, {
            propsData: {
                photos
            }
        });
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should display first image of photos', () => {
        const wrapper = shallowMount(Photo, {
            propsData: {
                photos
            }
        });
        const photoDiv = wrapper.find('.photo__main')
        expect(photoDiv.attributes('src')).toBe(photos[0])
        expect(wrapper.vm.mainImage.image).toBe(photos[0])
    });

    test('should change mainImage when thumbnail is clicked', () => {
        const wrapper = shallowMount(Photo, {
            propsData: {
                photos
            }
        });
        const thumbnails = wrapper.findAll('.product__detail__photo__thumbnail')
        const thumbnailToClick = thumbnails.at(1)
        thumbnailToClick.trigger('click')
        expect(wrapper.vm.mainImage.image).toBe(photos[1])
    });

    test('should emit showModal when full size button is clicked', () => {
        const wrapper = shallowMount(Photo, {
            propsData: {
                photos
            }
        });
        const fullSizeButton = wrapper.find('.product__detail__full_size')
        fullSizeButton.trigger('click')
        expect(wrapper.emitted('showModal')).toBeDefined()
    });
});

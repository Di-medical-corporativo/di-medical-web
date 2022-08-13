import modalSlider from '@/components/products/detail/modalSlider.vue'
import { shallowMount } from '@vue/test-utils'

describe('modal slider from product detail', () => {
    test('should match snapshot', () => {
        const wrapper = shallowMount(modalSlider)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should display fist image in imageList prop', () => {
        const wrapper = shallowMount(modalSlider, {
            propsData: {
                isDisplayed: true,
                actualImageId: 0,
                imageList: [
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2F7c077cc9-2fce-48b0-acff-5f6a99c310a8-product.jpg?alt=media&token=5068c62d-a816-4efe-bb48-843d77c4c2e2',
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2F32096c21-eaf2-4527-844c-8470128193b7-product.jpg?alt=media&token=413a48e7-8bca-4d38-ab74-479caeabebfb',
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2Fc98f95c7-ed15-4b35-8c6d-051a2ed42879-product.jpg?alt=media&token=99f1772e-7e60-41da-9f80-2ebf9c228ba3'
                ]
            }
        })
        const sliderImage = wrapper.find('.slider__full')
        const firstImageOfImageList = wrapper.props('imageList')[0]
        expect(sliderImage.attributes('src')).toBe(firstImageOfImageList)
    })

    test('should change to next image in imageList when arrow is clicked', () => {
        const wrapper = shallowMount(modalSlider, {
            propsData: {
                isDisplayed: true,
                actualImageId: 0,
                imageList: [
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2F7c077cc9-2fce-48b0-acff-5f6a99c310a8-product.jpg?alt=media&token=5068c62d-a816-4efe-bb48-843d77c4c2e2',
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2F32096c21-eaf2-4527-844c-8470128193b7-product.jpg?alt=media&token=413a48e7-8bca-4d38-ab74-479caeabebfb',
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2Fc98f95c7-ed15-4b35-8c6d-051a2ed42879-product.jpg?alt=media&token=99f1772e-7e60-41da-9f80-2ebf9c228ba3'
                ]
            }
        })
        const arrowToChangeNextImage = wrapper.find('.slider__right__arrow')
        arrowToChangeNextImage.trigger('click')
        expect(wrapper.vm.counterImage).toBe(1)
    })

    test('should hide modal with css top propertie when isDisplayed prop is set to false', () => {
        const wrapper = shallowMount(modalSlider, {
            propsData: {
                isDisplayed: false,
                actualImageId: 0,
                imageList: [
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2F7c077cc9-2fce-48b0-acff-5f6a99c310a8-product.jpg?alt=media&token=5068c62d-a816-4efe-bb48-843d77c4c2e2',
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2F32096c21-eaf2-4527-844c-8470128193b7-product.jpg?alt=media&token=413a48e7-8bca-4d38-ab74-479caeabebfb',
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2Fc98f95c7-ed15-4b35-8c6d-051a2ed42879-product.jpg?alt=media&token=99f1772e-7e60-41da-9f80-2ebf9c228ba3'
                ]
            }
        })

        const isDisplayed = wrapper.attributes('style')
        const notDisplayedValue = 'top: -100vh;'
        expect(isDisplayed).toBe(notDisplayedValue)
    });

    test('should emit closeModal when the modal is closed', () => {
        const wrapper = shallowMount(modalSlider, {
            propsData: {
                isDisplayed: true,
                actualImageId: 0,
                imageList: [
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2F7c077cc9-2fce-48b0-acff-5f6a99c310a8-product.jpg?alt=media&token=5068c62d-a816-4efe-bb48-843d77c4c2e2',
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2F32096c21-eaf2-4527-844c-8470128193b7-product.jpg?alt=media&token=413a48e7-8bca-4d38-ab74-479caeabebfb',
                    'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2Fc98f95c7-ed15-4b35-8c6d-051a2ed42879-product.jpg?alt=media&token=99f1772e-7e60-41da-9f80-2ebf9c228ba3'
                ]
            }
        })
        const closeButton = wrapper.find('.slider__close')
        closeButton.trigger('click')
        expect(wrapper.emitted('closeModal')).toBeDefined()
    });


})

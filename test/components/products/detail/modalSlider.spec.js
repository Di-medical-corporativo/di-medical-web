import modalSlider from '@/components/products/detail/modalSlider.vue'
import { shallowMount } from '@vue/test-utils'

describe('modal slider from product detail', () => {
    test('should match snapshot', () => {
        const wrapper = shallowMount(modalSlider)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should appear props image', () => {
        const wrapper = shallowMount(modalSlider, {
            propsData: {
                showModal: true,
                actualImage: 0
            }
        })
        const image = wrapper.find('img').attributes('src')
        expect(image).toBe(wrapper.vm.images[0])
    })

    test('should show modal', () => {
        const wrapper = shallowMount(modalSlider, {
            propsData: {
                showModal: true,
                actualImage: 0
            }
        })
        const modalContainer = wrapper.find('.modal__slider').attributes()
        expect(modalContainer.style).toBe('top: 0px;')
    })

    test('should emit closeModal clicking in icon/outside', async () => {
        const wrapper = shallowMount(modalSlider, {
            propsData: {
                showModal: true,
                actualImage: 0
            }
        })
        const closeIcon = wrapper.find('.slider__close')
        const modalContainer = wrapper.find('.modal__slider')

        await closeIcon.trigger('click')
        expect(wrapper.emitted('closeModal')).toBeTruthy()
        await modalContainer.trigger('click')
        expect(wrapper.emitted('closeModal')).toBeTruthy()
    })

    test('should not show modal', async () => {
        const wrapper = shallowMount(modalSlider, {
            propsData: {
                showModal: false,
                actualImage: 0
            }
        })

        const modalContainer = wrapper.find('.modal__slider')
        expect(modalContainer.attributes('style')).toBe('top: -100vh;')
    })

    test('should change image with arrows', () => {
        const wrapper = shallowMount(modalSlider, {
            propsData: {
                showModal: false,
                actualImage: 1
            }
        })
    });
})
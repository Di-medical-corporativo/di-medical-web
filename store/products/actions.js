
import { database } from '../../firebase/firebase'
import { get, ref } from 'firebase/database';
export const getProducts = async() => {
    const r = ref(database)
    const res = await get(r)
    console.log(res.val());
}
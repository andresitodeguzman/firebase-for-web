import * as firebase from 'firebase/app';
import 'firebase/firestore';


export class ParcelService {

    constructor() {
    }

    async add(obj) {
        return await firebase.firestore().collection('parcels').doc(`${Math. round((new Date()). getTime() / 1000)}`).set(obj);
    }

    async setAsArrived(id) {
        return await firebase.firestore().collection('parcels').doc(id).set({ status: 'arrived' });
    }

    async getAllInTransit() {
        return await firebase.firestore().collection('parcels').where('status','==','in_transit').get();
    }

    async getAllArrived() {
        return await firebase.firestore().collection('parcels').where('status','==','arrived').get();
    }

}

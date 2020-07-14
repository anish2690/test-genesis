import { ClientOptions } from '@fmfe/genesis-core';
import Vue from 'vue';
import App from './app.vue';

export default async (clientOptions: ClientOptions): Promise<Vue> => {
    return new Vue({
        render(h) {
            return h(App);
        }
    });
};

(function () {

    'use strict'

    var pubsub = (function pubsub() {

        var subscriber = {};

        function EventObject() {}

        function subscribe(event, callback) {
            if (!subscriber[event]) {
                var subscribeArray = [callback];
                subscriber[event] = subscribeArray;
            } else {
                subscriber.push(callback);
            }
        }

        function publish(event) {
            if (subscriber[event]) {
                subscriber[event].array.forEach(element => {
                    callback();
                });
            }
        }

        return {
            pub: publish,
            subs: subscriber
        };

    });

}());
define([
    'jquery',
], function ($) {
    'use strict';

    $.widget('mage.changeProductCount', {
        options: {
            formInputQtySelector: '.input-text.qty',
            decreaseButtonSelector: '.number-decrease',
            increaseButtonSelector: '.number-increase'
        },

        /**
         */
        _create: function () {
            var options = this.options;

            var $qty = $(options.formInputQtySelector, this.element);
            var $decrease = $(options.decreaseButtonSelector, this.element);
            var $increase = $(options.increaseButtonSelector, this.element);

            $decrease.on('click', function() {
                var currentValue = $qty.val() > 1 ? $qty.val() : 1;
                $qty.val(--currentValue);
            });

            $increase.on('click', function() {
                var currentValue = $qty.val();
                $qty.val(++currentValue);
            });
        }
    });

    return $.mage.changeProductCount;
});

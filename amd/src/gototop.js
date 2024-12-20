// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

define(['jquery'], ($) => {
    return {
        init: () => {
            const button = $('<button/>', {
                id: 'gototop',
                class: 'btn btn-primary',
                style: 'position: fixed; bottom: 80px; right: 20px; display: none; z-index: 1100; ' +
                    'width: 35px; height: 35px; border-radius: 50%;' // Adjusted styles for circle
            }).append($('<i/>', {
                class: 'fa fa-arrow-up',
                style: 'font-size: 15px; color: white;' // FontAwesome up arrow icon
            })).appendTo('body');

            $(window).scroll(() => {
                if ($(window).scrollTop() > 100) {
                    button.fadeIn();
                } else {
                    button.fadeOut();
                }
            });

            button.on('click', () => {
                $('html, body').animate({ scrollTop: 0 }, 'slow');
                return false;
            });
        }
    };
});
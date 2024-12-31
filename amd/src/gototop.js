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

define(['jquery', 'core/templates'], ($, templates) => {
    return {
        init: () => {
            templates.render('local_gototop/gototop', {}).done((html, js) => {
                $('body').append(html);
                templates.runTemplateJS(js);

                const button = $('#gototop');

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

                const adjustButtonPosition = () => {
                    if ($('#theme_boost-drawers-blocks').hasClass('show')) {
                        button.css('right', 'calc(20px + 315px + 0.9rem)'); // Adjust based on drawer width
                    } else {
                        button.css('right', '20px');
                    }
                };

                $('#theme_boost-drawers-blocks').on('transitionend', adjustButtonPosition);
                $(window).on('resize', adjustButtonPosition);
                adjustButtonPosition(); // Initial adjustment
            });
        }
    };
});